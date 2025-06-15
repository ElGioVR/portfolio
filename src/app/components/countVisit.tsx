'use client';

import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
  doc,
  getDoc,
  updateDoc,
  increment,
  setDoc,
} from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

interface VisitCounterProps {
  darkMode?: boolean;
}

export default function VisitCounter({ darkMode }: VisitCounterProps) {
  const [count, setCount] = useState<number | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchAndUpdateCount = async () => {
      const alreadyVisited = localStorage.getItem('visited');
      const alreadyConfetty = localStorage.getItem('confetty');
      const counterRef = doc(db, 'analytics', 'visitCounter');

      if (!alreadyVisited) {
        localStorage.setItem('visited', 'true');

        const docSnap = await getDoc(counterRef);
        if (!docSnap.exists()) {
          await setDoc(counterRef, { count: 1 });
        } else {
          await updateDoc(counterRef, {
            count: increment(1),
          });
        }

        if (!alreadyConfetty) {
          setTimeout(() => {
            localStorage.setItem('confetty', 'true');
          }, 700);
        }
      }

      const docSnap = await getDoc(counterRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setCount(data.count);
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
