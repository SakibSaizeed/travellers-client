import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/api";

// Module-level cache shared by every component that calls useServices(), so a page like
// Home (which renders both Special and AllServices) fires one /services request instead
// of one per component. invalidateServicesCache() clears it after a mutation (add/delete)
// so the next mount re-fetches fresh data.
let cachedServices = null;
let inFlightRequest = null;

const fetchServices = () => {
  if (!inFlightRequest) {
    inFlightRequest = fetch(`${API_BASE_URL}/services`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        cachedServices = data;
        return data;
      })
      .finally(() => {
        inFlightRequest = null;
      });
  }
  return inFlightRequest;
};

export const invalidateServicesCache = () => {
  cachedServices = null;
};

const useServices = () => {
  const [services, setServices] = useState(cachedServices || []);
  const [loading, setLoading] = useState(!cachedServices);
  const [error, setError] = useState(null);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    if (cachedServices) {
      setServices(cachedServices);
      setLoading(false);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    fetchServices()
      .then((data) => {
        if (isMounted) setServices(data);
      })
      .catch((err) => {
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [reloadToken]);

  const retry = () => {
    invalidateServicesCache();
    setReloadToken((token) => token + 1);
  };

  return [services, setServices, { loading, error, retry }];
};

export default useServices;
