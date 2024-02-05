import { useState } from 'react';
import {
  TowEventAttributes,
  TowSearchResponse,
} from '@/lib/types/TowSearchResponse.ts';
import { SearchForm, formSchema } from '@/components/search-form.tsx';
import { z } from 'zod';
import { TowEventCard } from '@/components/tow-event-card.tsx';

const BASE_URL =
  'https://opendata.baltimorecity.gov/egis/rest/services/NonSpatialTables/Towing/FeatureServer/0/query';

export const Search = () => {
  const [response, setResponse] = useState('');
  const [events, setEvents] = useState<TowEventAttributes[]>([]);

  async function handleSubmit({
    tagNumber,
    state,
  }: z.infer<typeof formSchema>) {
    const url = new URL(BASE_URL);
    const searchParams = new URLSearchParams({
      where: `TagNumber = '${tagNumber}' AND TagState = '${state}'`,
      outFields: '*',
      outSR: '4326',
      f: 'json',
    });
    url.search = searchParams.toString();

    const res = await fetch(url);
    const json = (await res.json()) as TowSearchResponse;
    setResponse(JSON.stringify(json.features, null, 2));
    setEvents(json.features.map((feature) => feature.attributes));
  }

  return (
    <div>
      <h1>Search</h1>
      <SearchForm handleSubmit={handleSubmit} />

      {events.map((event, i) => (
        <TowEventCard attributes={event} key={i} />
      ))}

      <pre>{response}</pre>
    </div>
  );
};
