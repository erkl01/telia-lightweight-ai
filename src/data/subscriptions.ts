export type SubscriptionIcon = "smartphone" | "add" | "cloud";

export interface Subscription {
  id: string;
  name: string;
  number?: string;
  icon: SubscriptionIcon;
  banner: string;
  surf?: { resetInDays: number; left: string; euLeft: string };
  calls?: { minutes: string; sms: string };
  variableCost?: string;
  plan: string;
  binding: string;
  notice: string;
  price: string;
  discount?: { until: string; ordinary: string };
  payment: string;
}

export const subscriptions: Subscription[] = [
  {
    id: "tommy",
    name: "Tommy",
    number: "070-2987171",
    icon: "smartphone",
    banner: "Data obegränsad",
    surf: { resetInDays: 0, left: "Obegränsat", euLeft: "100 GB" },
    calls: { minutes: "0 minuter", sms: "0 st" },
    variableCost: "0 kr",
    plan: "Mobil Obegränsad Personal",
    binding: "Ingen",
    notice: "30 dagar",
    price: "299 kr/mån",
    discount: { until: "2028-02-01", ordinary: "539 kr/mån" },
    payment: "E-faktura",
  },
  {
    id: "4g-wifi-lundsbrunn",
    name: "4G WiFi Lundsbrunn",
    number: "076-1275490",
    icon: "smartphone",
    banner: "Data 100 GB",
    surf: { resetInDays: 12, left: "64 GB", euLeft: "100 GB" },
    calls: { minutes: "0 minuter", sms: "0 st" },
    variableCost: "0 kr",
    plan: "Mobilt bredband 100 GB",
    binding: "Ingen",
    notice: "30 dagar",
    price: "349 kr/mån",
    payment: "E-faktura",
  },
  {
    id: "malin",
    name: "Malin",
    number: "070-5853411",
    icon: "smartphone",
    banner: "Data obegränsad",
    surf: { resetInDays: 9, left: "Obegränsat", euLeft: "100 GB" },
    calls: { minutes: "212 minuter", sms: "37 st" },
    variableCost: "0 kr",
    plan: "Mobil Obegränsad Personal",
    binding: "Ingen",
    notice: "30 dagar",
    price: "399 kr/mån",
    discount: { until: "2027-06-01", ordinary: "539 kr/mån" },
    payment: "Autogiro",
  },
  {
    id: "kontantkort-072-2360807",
    name: "Telia Kontantkort",
    number: "072-2360807",
    icon: "smartphone",
    banner: "Kontantkort",
    surf: { resetInDays: 21, left: "3 GB", euLeft: "3 GB" },
    calls: { minutes: "18 minuter", sms: "4 st" },
    variableCost: "0 kr",
    plan: "Telia Kontantkort",
    binding: "Ingen",
    notice: "Ingen",
    price: "Betala per användning",
    payment: "Saldo",
  },
  {
    id: "kontantkort-072-2361294",
    name: "Telia Kontantkort",
    number: "072-2361294",
    icon: "smartphone",
    banner: "Kontantkort",
    surf: { resetInDays: 4, left: "1,5 GB", euLeft: "1,5 GB" },
    calls: { minutes: "52 minuter", sms: "11 st" },
    variableCost: "0 kr",
    plan: "Telia Kontantkort",
    binding: "Ingen",
    notice: "Ingen",
    price: "Betala per användning",
    payment: "Saldo",
  },
  {
    id: "fast-avgift-dof",
    name: "Fast avgift Dof",
    number: "070-5093090",
    icon: "add",
    banner: "Fast avgift",
    plan: "Fast avgift",
    binding: "Ingen",
    notice: "30 dagar",
    price: "49 kr/mån",
    payment: "E-faktura",
  },
  {
    id: "telia-cloud",
    name: "Telia Cloud",
    icon: "cloud",
    banner: "Telia Cloud 100 GB",
    plan: "Telia Cloud 100 GB",
    binding: "Ingen",
    notice: "30 dagar",
    price: "29 kr/mån",
    payment: "E-faktura",
  },
];
