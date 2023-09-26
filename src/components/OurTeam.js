import React, { useState } from "react";
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
    image: "arnav.png",
    position: "President",
    portfolio: "https://arnavpandey.xyz",
    instagram: "https://instagram.com/arnavpandey722",
    linkedin: "https://linkedin.com/in/arnav-pandey-985280227",
  },
  {
    name: "Rohan Ramakrishnan",
    image:
      "rohan.webp",
    position: "President",
    linkedin: "https://linkedin.com/in/rohan-ramakrishnan-7225a9290/",
  },
  {
    name: "Aditya Sahasranam",
    image:
      "adi.jpeg",
    position: "Vice President",
    portfolio: "https://adityasahas.tech",
    twitter: "https://twitter.com/adityasahas",
    instagram: "https://instagram.com/bababooeyacc",
    linkedin: "https://linkedin.com/in/adityasahas",
  },
  {
    name: "Srinikesh Kanneluru",
    image:
      "kesh.webp",
    position: "Vice President",
    linkedin: "https://linkedin.com/in/srinikeshkanneluru",
  },
  {
    name: "Swayam Shah",
    image:
      "sway.webp",
    position: "Secretary",
    linkedin: "https://linkedin.com/in/swayam-shah-699aa6235",
  },
  {
    name: "Caitelyn Huang ",
    image:
      "caitelyn.jpg",
    position: "Treasurer",
    instagram: "https://www.instagram.com/caiitelyn/",
  },

  {
    name: "Tiffany Zhang",
    image: "tiff.jpg",
    position: "Marketing Manager",
    instagram: "instagram.com/tiffzhny",
  },

  {
    name: "Vivaan Vora",
    image:
      "https://cdn.discordapp.com/attachments/1065021922447999036/1079588343773413486/vivaan-vora.04d0429.png",
    position: "Activities Coordinator",
    instagram: "https://www.instagram.com/vivaan_vora/",
    linkedin: "https://linkedin.com/in/vivaan-vora-720410284",
  },
];

export default function OurTeam() {
  return (
    <div className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 py-10 sm:py-16 lg:py-20 px-4 md:px-8 lg:px-12 xl:px-24 backdrop-filter backdrop-blur-lg bg-white bg-opacity-70">
      <h2 className="justify-center flex text-gray-900 text-2xl sm:text-3xl font-bold font-dela-gothic mb-4">
        Our Team
      </h2>

      <div className="max-w-full w-full mx-auto flex flex-wrap justify-center gap-4">
        {teamMembers.map((member, index) => (
          <ProfileCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

function ProfileCard({ member }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="font-dm-sans w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-2 my-4 flex flex-col justify-between"
    >
      <CardHeader
        floated={isHovered}
        className="h-48 w-48  transition-all duration-700 ease-in-out mx-auto"
      >
        {imgFailed ? (
          <div className="bg-gray-200 h-full w-full flex items-center justify-center">
            <Typography className="text-5xl font-bold">
              {getInitials(member.name)}
            </Typography>
          </div>
        ) : (
          <img
            src={member.image}
            alt="profile"
            className="object-cover h-full w-full mx-auto rounded shadow-lg"
            onError={() => setImgFailed(true)}
          />
        )}
      </CardHeader>

      <CardBody className="text-center p-4">
        <Typography
          variant="h4"
          color="blue-gray"
          className="font-dm-sans mb-2"
        >
          {member.name}
        </Typography>
        <Typography
          color="blue-gray"
          className="font-dm-sans font-medium"
          textGradient
        >
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
              target="_blank"
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
              target="_blank"
              as="a"
              href={member.instagram}
              variant="lead"
              color="purple"
              textGradient
            >
              <i className="fab fa-instagram" />
            </Typography>
          </Tooltip>
        )}
        {member.linkedin && (
          <Tooltip content="LinkedIn">
            <Typography
              target="_blank"
              as="a"
              href={member.linkedin}
              variant="lead"
              color="blue"
              textGradient
            >
              <i className="fab fa-linkedin" />
            </Typography>
          </Tooltip>
        )}
      </CardFooter>
    </Card>
  );
}
