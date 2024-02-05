export type TowSearchResponse = {
  features: {
    attributes: TowEventAttributes;
  }[];
};

export type TowEventAttributes = {
  PropertyNumber: string;
  TowedDateTime: number;
  PickupType: string;
  VehicleType: string | null;
  VehicleYear: string;
  VehicleMake: string;
  VehicleModel: string;
  VehicleColor: string | null;
  TagNumber: string;
  TagState: string;
  TowCompany: string;
  TowCharge: number;
  TowedFromLocation: string;
  HowTowed: string;
  SlingUsed: string;
  DollyUsed: string | null;
  rollBackUsed: string;
  pinPulled: string | null;
  pinReplaced: string | null;
  WheelLift: string;
  Stinger: string | null;
  ReceivingDateTime: number;
  StorageYard: string;
  StorageLocation: string;
  StorageTelephone: string;
  TitleRenounciation: number | null;
  TRDateTime: number | null;
  PersonalPropRemoved: string | null;
  PersonalPropLeftInVehicle: string | null;
  HoldType: string | null;
  HoldDateTime: number | null;
  HoldReleasedDateTime: number | null;
  HoldReleaseNotifyDate: number | null;
  RemovedFromYardDate: number | null;
  StolenVehicleFlag: 0 | 1 | null;
  Status: string | null;
  ReleaseDateTime: number | null;
  ReleaseType: string | null;
  TotalPaid: number | null;
  ESRI_OID: number | null;
};
