// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Data = {
  id: number,
  name: string,
  description: string,
  excludesPrograms: Array<number>,
  exclusionText: string
  preselected: boolean,
  termsText: string,
  termsLink?: string,
  footer?: string,
  links?: Array<{
    text: string,
    link?: string
  }>,
  perks: Array<{
    text: string,
    link?: string
  }>
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) {
  res.status(200).json([
    {
      id: 4,
      name: "BGE EVsmart Rebate",
      description: "",
      excludesPrograms: [12],
      exclusionText: "Not compatible with BGE Lyft",
      preselected: true,
      termsText: "BGE EVsmart Rebate Terms and conditions",
      footer:
        "Have existing charge scheduling? We can control scheduling in your vehicle but recommend removing scheduling in your charger for best results",
      perks: [
        {
          text: "100 dollar rebate every year for participating",
        },
      ],
    },
    {
      id: 5,
      name: "BGE Time of Use Rate",
      description: "BGE offers customers the opportunity to enroll their eligible smart Level 2 chargers in an Electric Vehicle Charging Time of Use Rate through a simple, two step process. This rate offers incentives, in the form of reduced utility bills, to customers that charge their EV during off-peak hours.",
      excludesPrograms: [12],
      exclusionText: "Not compatible with BGE Lyft",
      preselected: true,
      links: [
        {
          text: "Learn More About Electric Vehicle Charging Time of Use Rate",
          link: "https://www.bge.com/SmartEnergy/InnovationTechnology/Pages/EVTOURate.aspx",
        },
      ],
      termsText: "BGE Time of Use Terms of Service",
      termsLink: "evpulse.com/bge-time-of-use-terms",
      perks: [
        {
          text: "Discounted EV charging at certain times",
        },
        {
          text: "Save the most money on home charging",
        },
      ],
    },
    {
      id: 12,
      name: "BGE Lyft",
      description: "Fastest EV Chargers on BGE’s EVsmart Network Now Live at BWI BGE is also partnering with Lyft on an upcoming U.S. Department of Energy supported program focused on providing equitable access to cleaner transportation options",
      excludesPrograms: [5, 4],
      exclusionText: "Not available with EVSmart Rebate or Time of Use",
      preselected: false,
      links: [
        {
          text: "See more info",
          link: "evpulse.com/bge-lyft",
        },
      ],
      termsText: "BGE Lyft Terms",
      termsLink: "evpulse.com/bge-lyft-terms",
      perks: [
        {
          text: "Save money on your Lyfts!",
        },
      ],
    },
  ]);
}
