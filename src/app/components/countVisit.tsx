'use client';

import { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import {
  doc,
  getDoc,
  updateDoc,
  increment,
  setDoc,
} from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';
import { useTranslation } from 'react-i18next';

interface VisitCounterProps {
  darkMode?: boolean;
}

export default function VisitCounter({ darkMode }: VisitCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchAndUpdateCount = async () => {
      try {
        await signInAnonymously(auth);
        const alreadyVisited = localStorage.getItem('visited');
        const alreadyConfetty = localStorage.getItem('confetty');
        const counterRef = doc(db, 'analytics', 'visitCounter');
        let newCount = 0;

        // Datos para el email de visita
        const visitPayload = {
          time_local: new Date().toLocaleString(),
          timestamp: Date.now(),
          location_source: 'browser',
          userAgent: navigator.userAgent,
          // Puedes agregar más datos si tienes geolocalización
        };

        if (!alreadyVisited) {
          localStorage.setItem('visited', 'true');

          const docSnap = await getDoc(counterRef);
          if (!docSnap.exists()) {
            await setDoc(counterRef, { count: 1 });
            newCount = 1;
          } else {
            const prevCount = docSnap.data().count || 0;
            await updateDoc(counterRef, {
              count: increment(1),
            });
            newCount = prevCount + 1;
          }

          // Llamada al endpoint para enviar email de visita
          fetch('/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ visit: visitPayload }),
          });

          if (!alreadyConfetty) {
            setTimeout(() => {
              localStorage.setItem('confetty', 'true');
            }, 700);
          }
        } else {
          const docSnap = await getDoc(counterRef);
          if (docSnap.exists()) {
            newCount = docSnap.data().count;
          }
        }
        setCount(newCount);
      } catch (error) {
        console.error('Error al actualizar o leer el contador de visitas:', error);
        setCount(null);
      }
    };

    fetchAndUpdateCount();
  }, []);

  return (
    <div>
      <h2>
        {t('visitCounter.uniqueVisits')}:{" "}
        {count !== null ? (
          <span
            style={{
              display: 'inline-block',
              padding: '0.2em .6em',
              borderRadius: '5px',
              background: darkMode ? '#9c2567' : '#f43f5e',
              color: '#fff',
              fontWeight: 600,
              fontSize: '.7em',
            }}
          >
            {count}
          </span>
        ) : (
          t('visitCounter.loading')
        )}
      </h2>
    </div>
  );
}