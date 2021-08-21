import express from 'express';
import CacheProvider from '../utility/cacheProvider';

export default async ({ app }: { app: express.Express }) => {
  const cacheSampleData = async function (): Promise<void> {
    const someData = { target: 'Test', author: 'Babak.Davoodi' };
    CacheProvider.set('sampleCacheKey', someData);
  };

  const cacheSomethingElse = async function (): Promise<void> {
    // Do your own operations
  };

  cacheSampleData();
  cacheSomethingElse();
};
