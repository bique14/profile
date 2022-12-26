import { useEffect } from "react";

import Icons from "../icons";

const cacheName = "my-cache";

const addToCache = async (request: any, response: any) => {
  const cache = await caches.open(cacheName);
  return cache.put(request, response);
};

const getFromCache = async (request: any) => {
  const cache = await caches.open(cacheName);
  return cache.match(request);
};

export const cacheFirst = async (request: any) => {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  const response = await fetch(request);
  await addToCache(request, response.clone());
  return response;
};

export const getCache = async (src: any) => {
  const response = await getFromCache(src);
  if (response) {
    return response.url;
  }
  return null;
};

const useCached = () => {
  useEffect(() => {
    const load = async () => {
      await Promise.all([
        cacheFirst(Icons.Apple),
        cacheFirst(Icons.ChevronRight),
        cacheFirst(Icons.Download),
        cacheFirst(Icons.PDF),
        cacheFirst(Icons.Terminal),
        cacheFirst(Icons.Note),
        cacheFirst(Icons.Notion),
        cacheFirst(Icons.Spotify),
        cacheFirst(Icons.AppStore),
        cacheFirst(Icons.Chrome),
        cacheFirst(Icons.Telegram),
        cacheFirst(Icons.VSCode),
        cacheFirst(Icons.Finder),
      ]);
    };

    load();
  }, []);
};

export default useCached;
