import dayjs from 'dayjs';
import titleize from 'titleize';

import { TowEventCardAttribute } from '@/components/tow-event-card-attribute.tsx';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';

import { TowEventAttributes } from '@/lib/types/TowSearchResponse.ts';

type Props = {
  attributes: TowEventAttributes;
};

function buildVehicleDescription(
  year: string | null,
  make: string | null,
  model: string | null,
  color: string | null,
) {
  let description = '';

  if (color) {
    description += `${color} `;
  }

  if (year) {
    const formattedYear = year.length === 2 ? `'${year}` : year;
    description += `${formattedYear} `;
  }

  if (make) {
    description += `${titleize(make)} `;
  }

  if (model) {
    description += `${titleize(model)} `;
  }

  if (description.length === 0) {
    return '-';
  }

  return description.trim();
}
export function TowEventCard({ attributes }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {buildVehicleDescription(
            attributes.VehicleYear,
            attributes.VehicleMake,
            attributes.VehicleModel,
            attributes.VehicleColor,
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="max-w-full flex flex-wrap gap-x-12 gap-y-4">
        <TowEventCardAttribute name="Tag Number" value={attributes.TagNumber} />
        <TowEventCardAttribute name="Tag State" value={attributes.TagState} />
        <TowEventCardAttribute
          name="Towed From"
          value={titleize(attributes.TowedFromLocation)}
        />
        <TowEventCardAttribute
          name="Towed Time"
          value={dayjs(attributes.TowedDateTime).format(
            'MMM D, YYYY @ hh:mm A',
          )}
        />
        <TowEventCardAttribute
          name="Tow Reason"
          value={attributes.PickupType ?? '-'}
        />
        <TowEventCardAttribute name="Towed By" value={attributes.TowCompany} />
        <TowEventCardAttribute
          name="Tow Charge"
          value={attributes.TowCharge ? `$${attributes.TowCharge}` : '-'}
        />
        <div>
          <h4 className="text-xl font-semibold tracking-tight">Storage Yard</h4>
          <p>{attributes.StorageYard}</p>
          {attributes.StorageLocation ? (
            <a
              href={`https://www.google.com/maps/search/?api=1&${new URLSearchParams({ query: attributes.StorageLocation }).toString()}`}
              className="text-blue-500 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {attributes.StorageLocation}
            </a>
          ) : (
            <p>-</p>
          )}
          <a
            href={`tel:${attributes.StorageTelephone}`}
            className="text-blue-500 visited:text-purple-800"
          >
            {attributes.StorageTelephone}
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
