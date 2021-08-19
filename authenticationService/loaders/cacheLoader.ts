import express from 'express';
import CacheProvider from '../utility/cacheProvider';

export default async ({ app }: { app: express.Express }) => {

  const cacheSampleData = async () => {
    let someData = { target: 'Test', author: 'Babak.Davoodi' };
    CacheProvider.set('sampleCacheKey', someData);
  }

  const cacheSomethingElse = async () => {
    // Do your own operations
  }

  cacheSampleData();
  cacheSomethingElse();
};


// all cached item will be managed here 
// added by babak


