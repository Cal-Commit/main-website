import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const teamMembers = [
  {
    name: "Arnav Pandey",
    image: "https://splitxorpio.github.io/portfolio/picture.png",
    position: "President",
    portfolio: "https://arnavpandey.xyz",
  },
  {
    name: "Rohan Ramakrishnan",
    image:
      "https://static.wixstatic.com/media/8a7384_4f4eb4ece187481980253a014e735023~mv2.png/v1/crop/x_28,y_16,w_475,h_474/fill/w_253,h_253,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Rohan%201.png",
    position: "President",
  },
  {
    name: "Aditya Sahasranam",
    image:
      "https://cdn.discordapp.com/attachments/997774498973626418/1122391117296570449/IMG_4747.jpg",
    position: "Vice President",
    portfolio: "https://adityasahas.tech",
    twitter: "https://twitter.com/adityasahas",
    instagram: "https://instagram.com/bababooeyacc",
  },
  {
    name: "Srinikesh Kanneluru",
    image:
      "https://cdn.discordapp.com/attachments/1050157259134611476/1122609138292228156/Professinoal_Profile_Pic.png",
    position: "Vice President",
  },
  {
    name: "Swayam Shah",
    image:
      "https://static.wixstatic.com/media/8a7384_b4cbb075bfbc4be99c44f656834059d5~mv2.jpg/v1/crop/x_0,y_6,w_233,h_233/fill/w_253,h_253,al_c,lg_1,q_80,enc_auto/IMG_B460E9285B46-1.jpg",
    position: "Secretary",
  },
  {
    name: "Caitelyn Huang ",
    image:
      "https://cdn.discordapp.com/attachments/997774498973626418/1123118877983899690/IMG_3724.png",
    position: "Treasurer",
  },

  {
    name: "Tiffany Zhang",
    image: "https://roborally.calcommit.org/tiff.jpg",
    position: "Marketing Manager",
  },

  {
    name: "Vivaan Vora",
    image:
      "https://cdn.discordapp.com/attachments/1065021922447999036/1079588343773413486/vivaan-vora.04d0429.png",
    position: "Activities Coordinator",
  },
];
function ProfileCard({ member }) {
  return (
    <Card className="font-dm-sans w-1/5 mx-2 my-4 flex flex-col justify-between">
      <CardHeader floated={false} className="h-80">
        <img
          src={member.image}
          alt="profile-picture"
          className="object-cover h-full w-full rounded"
        />
      </CardHeader>
      <CardBody className="text-center p-4">
        <Typography variant="h4" color="blue-gray" className=" font-dm-sans mb-2">
          {member.name}
        </Typography>
        <Typography color="blue-gray" className=" font-dm-sans font-medium" textGradient>
          {member.position}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-5 pt-2">
        {member.portfolio && (
          <Tooltip content="Portfolio">
            <Typography
              as="a"
              target="_blank"
              href={member.portfolio}
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fas fa-briefcase" />
            </Typography>
          </Tooltip>
        )}
        {member.twitter && (
          <Tooltip content="Twitter">
            <Typography
              as="a"
              href={member.twitter}
              variant="lead"
              color="light-blue"
              textGradient
            >
              <i className="fab fa-twitter" />
            </Typography>
          </Tooltip>
        )}
        {member.instagram && (
          <Tooltip content="Instagram">
            <Typography
              as="a"
              href={member.instagram}
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        )}{" "}
      </CardFooter>
    </Card>
  );
}
export default function OurTeam() {
  return (
    <div className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 py-20 px-4 md:px-8 lg:px-12 xl:px-24 backdrop-filter: blur(5px) bg-white bg-opacity-70">
            <h2 className="justify-center flex text-gray-900 text-3xl font-bold font-dela-gothic mb-4">Our Team</h2>

      <div className="max-w-full w-full mx-auto flex flex-wrap justify-center items-stretch">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}
