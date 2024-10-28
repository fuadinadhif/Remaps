import { PlaceType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const places = [
  {
    name: "Hotel Indonesia Kempinski",
    type: PlaceType.HOTEL,
    lat: -6.195125,
    lng: 106.823357,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
  },
  {
    name: "Raffles Jakarta",
    type: PlaceType.HOTEL,
    lat: -6.224153,
    lng: 106.824114,
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
  },
  {
    name: "Ascott Jakarta",
    type: PlaceType.APARTMENT,
    lat: -6.196374,
    lng: 106.820658,
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
  },
  {
    name: "The Ritz-Carlton Jakarta, Pacific Place",
    type: PlaceType.HOTEL,
    lat: -6.224556,
    lng: 106.807489,
    imageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
  },
  {
    name: "Fraser Residence Sudirman",
    type: PlaceType.APARTMENT,
    lat: -6.209406,
    lng: 106.823732,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
  },
  {
    name: "Grand Hyatt Jakarta",
    type: PlaceType.HOTEL,
    lat: -6.193701,
    lng: 106.823987,
    imageUrl:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop",
  },
  {
    name: "Shangri-La Hotel Jakarta",
    type: PlaceType.HOTEL,
    lat: -6.208885,
    lng: 106.815614,
    imageUrl:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop",
  },
  {
    name: "Ayana Midplaza Jakarta",
    type: PlaceType.HOTEL,
    lat: -6.208342,
    lng: 106.815995,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
  },
  {
    name: "The Hermitage, a Tribute Portfolio Hotel",
    type: PlaceType.HOTEL,
    lat: -6.201371,
    lng: 106.835482,
    imageUrl:
      "https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=800&auto=format&fit=crop",
  },
  {
    name: "Somerset Berlian Jakarta",
    type: PlaceType.APARTMENT,
    lat: -6.222674,
    lng: 106.783358,
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
  },
  {
    name: "Citadines Rasuna Jakarta",
    type: PlaceType.APARTMENT,
    lat: -6.213788,
    lng: 106.841091,
    imageUrl:
      "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?w=800&auto=format&fit=crop",
  },
  {
    name: "Dwijaya House of Pakubuwono",
    type: PlaceType.VILLA,
    lat: -6.242517,
    lng: 106.785638,
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
  },
  {
    name: "Oakwood Premier Cozmo Jakarta",
    type: PlaceType.APARTMENT,
    lat: -6.223275,
    lng: 106.829021,
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop",
  },
  {
    name: "Wyndham Casablanca Jakarta",
    type: PlaceType.HOTEL,
    lat: -6.225905,
    lng: 106.847103,
    imageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
  },
  {
    name: "Pullman Jakarta Indonesia",
    type: PlaceType.HOTEL,
    lat: -6.194306,
    lng: 106.823735,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
  },
  {
    name: "Veranda Serviced Residence",
    type: PlaceType.APARTMENT,
    lat: -6.224431,
    lng: 106.787561,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
  },
  {
    name: "Somerset Grand Citra Jakarta",
    type: PlaceType.APARTMENT,
    lat: -6.221695,
    lng: 106.826683,
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
  },
  {
    name: "The Dharmawangsa Jakarta",
    type: PlaceType.VILLA,
    lat: -6.260861,
    lng: 106.799527,
    imageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
  },
  {
    name: "Mercure Jakarta Sabang",
    type: PlaceType.HOTEL,
    lat: -6.181572,
    lng: 106.825673,
    imageUrl:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop",
  },
  {
    name: "Four Seasons Hotel Jakarta",
    type: PlaceType.HOTEL,
    lat: -6.224282,
    lng: 106.818748,
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
  },
  {
    name: "The Westin Jakarta",
    type: PlaceType.HOTEL,
    lat: -6.225441,
    lng: 106.841936,
    imageUrl:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&auto=format&fit=crop",
  },
  {
    name: "InterContinental Jakarta Pondok Indah",
    type: PlaceType.HOTEL,
    lat: -6.274546,
    lng: 106.787087,
    imageUrl:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&auto=format&fit=crop",
  },
  {
    name: "Ascott Kuningan Jakarta",
    type: PlaceType.APARTMENT,
    lat: -6.222795,
    lng: 106.828583,
    imageUrl:
      "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?w=800&auto=format&fit=crop",
  },
  {
    name: "Pullman Jakarta Central Park",
    type: PlaceType.HOTEL,
    lat: -6.178991,
    lng: 106.790406,
    imageUrl:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&auto=format&fit=crop",
  },
  {
    name: "Park Regis Arion Kemang",
    type: PlaceType.VILLA,
    lat: -6.260131,
    lng: 106.814688,
    imageUrl:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
  },
  {
    name: "Aston at Kuningan Suites",
    type: PlaceType.APARTMENT,
    lat: -6.204257,
    lng: 106.824214,
    imageUrl:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop",
  },
  {
    name: "The Sultan Hotel & Residence Jakarta",
    type: PlaceType.HOTEL,
    lat: -6.217152,
    lng: 106.811696,
    imageUrl:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop",
  },
  {
    name: "Mulia Residence Jakarta",
    type: PlaceType.APARTMENT,
    lat: -6.233391,
    lng: 106.822689,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
  },
  {
    name: "The Bellezza Suites",
    type: PlaceType.APARTMENT,
    lat: -6.221402,
    lng: 106.782639,
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
  },
  {
    name: "RedDoorz Plus near Bundaran HI",
    type: PlaceType.VILLA,
    lat: -6.192722,
    lng: 106.824114,
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
  },
];

export async function main() {
  try {
    for (let place of places) {
      await prisma.place.create({
        data: {
          name: place.name,
          type: place.type,
          lat: place.lat,
          lng: place.lng,
          imageUrl: place.imageUrl,
        },
      });
    }
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
