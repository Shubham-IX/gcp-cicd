import { CasesInline, CasesInline0, CasesMetadata } from '.';

export interface Cases {
    id?: string;
    referenceNum?: string;
    remoteId?: string;
    displayName?: string;
    customerId: string;
    customerName?: string;
    customerEmail?: string;
    customerLocationId: string;
    customerLocationName?: string;
    customerContactId: string;
    customerContactName?: string;
    customerContactEmail?: string;
    userId?: string;
    externalId?: string;
    type?: string;
    category?: string;
    details?: string;
    status?: string;
    job?: string;
    resolution?: string;
    created?: string;
    updated?: string;
    scheduledTime?: string;
    enrouteTime?: string;
    arrivalTime?: string;
    departureTime?: string;
    idrIsq?: string;
    idrProcess?: string;
    idrResolution?: string;
    techSupportMinutes?: number;
    specialNotes?: string;
    unmanaged?: boolean;
    ownerOrgTeamId?: string;
    sponsorOrgTeamId?: string;
    tags?: [string];
    categoryNew?: string;
    membersDevices: CasesInline[];
    kbArticles: CasesInline0[];
    metadataValues: CasesMetadata;
}