import React from "react";
import { Carousel, Typography, IconButton } from "@material-tailwind/react";

export default function OurEvents() {
  const events = [
    {
      name: "Oasis Hacks",
      link: "https://oasis.calcommit.org",
      date: "August 6th, 2023",
      info: "Set against the backdrop of Circuit Launch in Oakland, California, Oasis Hacks was a one-day hackathon extravaganza hosted by Cal Commit. Scheduled for August 6th, and running from 9 am to 9 pm PST, this event was a unique gathering of tech aficionados, problem solvers, and design thinkers who were all set to bring innovative solutions to life. Oasis Hacks stood out for its focus on real-world challenges and the pursuit of groundbreaking ideas. Whether you were a seasoned developer or a tech enthusiast, the event provided a fertile ground for skill development, network expansion, and innovative project creation. Participants teamed up for a fast-paced 12-hour coding session under the mentorship of industry experts, working towards solutions based on a specific theme. Not just a competition, Oasis Hacks also emphasized community building. With numerous opportunities for networking, attendees could connect with like-minded individuals, learn from industry veterans, and even catch the eye of potential investors and sponsors.",      images: [
        "https://lh3.googleusercontent.com/pw/AIL4fc-BTSgk3vWb0HKcEBMSSxunY3tYTouyijiqcp6PC10y0HQzduNwq9IA5WI2XITkFML5Yoe8cxCf227OMPGWvLQYqwgsasomi2lV2Pn2Q9srT9H61dbsNXOr5mLJ6-qpLS64U1vjaLPiQoY-xHf3z_vr=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_c5abyQUfHtKcYdwYuGJtFnyCIe2z96aGqY5gabmz-mMzfVsTQfUJ3-J7jBm-Uv-3Cx_LvIk-YUEhIBR1bga8Z3MsoTRzdlm0V21_6UmOVhNul9aP7HVpqj6xX_Fc_ofKwjjV6Ag2nZSF0mJkbqgyc=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-kWRQv9gWd-u-9P4gsrqzXS3Cd9Xho_eBVMR_7WO6Z16zzrp4rYoMrMAdaoVErYzMYvQ8934FwW1qxsb3RADE--QzduD5QvyK0Em1Ti--fL8MQb-qbUW_mJnhwSLXOtbDSroDHLE-FTqUnZ2_Yl0vz=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_q59OnFkDxmbd7LTmbviXxrOMH8vd0JVSr0ZduuqM9LnRDZA9U9wTIUXCyg-cZ84Z30ZrOUvMb-9rIHkIMOdPuCK1GhiT7S0G227CiUAPsDiConcdoMGWFtQKou4kJpMn-Nd-iNwLD1YgTPu5LAf8j=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_6ezI_9iOn4LSMOCD7Bq8lZT8FNkdARbd_4i2FxSUZj4bvA3M0LxgGT7vvcq-RhhBKfPNZj-JYrp33B0dohKG4gsQMWNkdJp-fk8K4CKJm9Vk2pw8t7vK-rPYmLFn6RCdGwIYvJStjprTOyOrgGNot=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_eKBPqVAavF_yY3nMxfAddT0dc48voT620yHIKgqZ0a_YOsI3d2W4ip33JOWCkm5YGYzbECv8FkAsk4eQqLqT4gIA6-YTy1xK0w7MRPH6xHqUzI3NNvNt8b1HSJEBjdyN2q2eRRJg056HHwFHBKq-4=w680-h906-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_BQ_BiA0MP_YZC6qFtvbjhYCnjrFm5n4rpwPmSXYi6N1_9A46mMTp-cFOGX1Xw3wqj23ea6kaXEKrPoh4UAvZkf7wH2kd4-mZpZVjLJmTlEOh7T-fWiDIn223Z4wPgix26Y5JSBvSpdVFJe9uRvZRj=w1366-h1820-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8q6pOgGFInqjRO9J_owArYnrgHSVxlLWaCP98evW9IB6rJX5q8ZyM-oPFy9DuHoWdGW5cVjiIlqVGBtClIXe6nuP_wsB1eU_nL_ssejNYGTnNJ-RHLDjzj8H2QhdG1I6a_GJTqZ4dNGHVe5FH39l6q=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc9hoqk0_xmFDV-OpFIv79-jZ3hNtBdMzXNIiFs_ds-iUfSvbG962KDG-JtbRg8FQnmj68JNL_GX9-vl_FNqIMTLT2lPgC66KBVM0dYQaaF-68UD5MIerjAdZBY_rBaJE0Ahjl4sP9DAwssS23zA8V_y=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-yecHOKL7oEY55uwgWyZdgUzTq2r25nKp70AfpYD9Ab5zbRR1PZyBKs8N47n8eHCxHPutnIxwfC1_6wwLORPguVPfFQYytT7LVxk2aHnb1upO6s-w58pqge2DY1ExSuzfBYy4QfOybQRHdtfcEIJav=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-a_BUbU5_f-uG3Ziy1NuxbFPHwHDqpcR7lFFEruhWRLbYyVFu-Pbn6DiD5KflGZQ6RSvpOHcwQe8rKdnIAZUC-9sM-YX19OEtRG8cp65iN_Hef6d_3QkXCe0216BK0GCEuXQ2xHobH-EgJBNny37uH4Q=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8ITQh3KTHilq1YiExXiMPMoexYCRCUve19fb-MoZAYtZfL5JIK5d0r2hdDEgXZ5LFCG1F-HrIQXu7iPLU6fUq36JQF3ksfZ3K1HenGjPlKBXpGNInFOnuO2tf33SyZuOkgHfQd4alCWCUB5ClI1JUZBw=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc9SB4KWdoDtFu93WbZcbT0tHMh8Ayl1tA21RtO3NZ8Ygi87ETefeaQKjIrfZ3X8UErJnhVf5AkhoM-FHxOovZ2-qGJ7xE3hlGRs_f67xDGo9X71gAkEX_TBaYAg7w_H2_J72ILXTvZ3N5q2VOHWMyC1aQ=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8X96LtgGxkp4aHU1wme1O8L_tVj2oXEEJVxMWfu3Z82xuqV6MMVU2dOzP2O1EYu-uqRHWnPU2ACV_bbcgRegr6YHr6gw5BysZFHNFIKi6LcuD_J7gSODGwLGTzbJYsLOQr7QOvVA376GIqdFiOhZIc4g=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_4KobHftwfQbOZtT_pNUEauOX-xj2bzrzsYO-QgPlYNC0q5IRo-qL1kJNS_w74kwWOAT2Oy-2P9QuCSUW-YHFB5v2QgSpLOZAKOJEHNRyOQhvJwj7pyFZvRpcfYR82GMH_HQOCTfgdj8T2OkgTvtUF=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc9vTXEqu9iHLwLMFtQwT1AoVHJEX0WaRixWQrn-BeOQpQEQIVMDD5KZZSqcozwk-xZumU9zj4J8agwrfEDGJaTT8yzd-XWa_rb1-pdMnDIB_Ct0jkLF1UMtaFzbBpXJ_7X2TtUgj2ExSW5FSPPTPdxf-g=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8X5T5kX-Fkwv4yPjWWG-DN6DJXQtqutq2ggAkz-xHZ3aYmvBC9R--TJlE1x9G5rCNSStFfNRnXC-lpOYsonsZvsYyVG0i72tG7lXk7C5K1DB-WprFINWMejdFhIGkkBI8GK1uu7qsjDRkdhasG49PprQ=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8UWrnKsq-Nf-IUtXl61ffMO18Mkvt7SGJi6daLcwuLeYwZETuUS9HbMUiG9KM2Yiq6F3vpcsyi4bIQGJUcF6wLSCMCZMWDwZZBTXxI1RUA8pIlfB24_GMX27rr8ryQ2GEV7REbzlkelEMaY13FUy35Yw=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_MnvhDW4-nNnIukrFW6DGR4JOpg2f7IKWUojn5gHEY5k-6257OUERIJcqxvDPMYy4UWmap2sJxXohEzEvlbzi3PaY3q6GjU1vdUFiZHrIvcRvv9QhbOnW7BnHtz_m0718s6EujZfqYHp2nEKq5IIWtow=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_nVnvpFJpGYKV3W7OQDNaEneEUFmXbEsXU-cGBjoiT2_BCnwy-5JKTjFDxUahcH9_3AVscWrsZBznhWK0kZNRd-K52hFJ9tXSC-h34psXOjImEW9tVMRir4oG7vtEGYcbpsVH3s7TeFfveelxyaTlfGA=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_o9bdw0VzFzYv5Y00wsMbtDcasi-UdlrWRfDqSGIk7cGJpMxh7ZBpm4sPPHo-hHr3maVn-0EyFp086imfpkcm6fGNg9u6gcQZNcLh_DXdJIBUDfnOy3FAw-PtLwcvzVlikgj7dI8F5YnPtPMQkABpHzg=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_ZmUH2SNt0ZZ9LfDly7fEAkN_gX_HfiPD3G5f4sqjPj9HRmQTIbQbU9gkDY99_0Fep2H-HcpUsO8ppXtmmvTDsErs2cFs2XE9xQM_CaE_Ljid_vhz5GCTn4J7Nt1CFhM20rWiV36w2SJqZ846GvwlHzg=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_g-F5vBv6qKjwluRwf_sbQt5k48zo1UpAQxFpZY5Bqjru0csbAiMUr32NoyTns1UMwIWcO-clu8FWCviApZHL7n4fCe406tyq3ozUyeGTlbW43_hYNQEajhCjzYvdjWKwRB_VAQQ7h1p1qotyiQhLasQ=w2594-h1946-s-no?authuser=0",
      ],
    },
    {
      name: "Git Init 2023",
      link: "https://gitinit.calcommit.org",
      date: "January 6th - 8th, 2023",
      info: "Hosted by Cal Commit, Git Init 2023 was an online hackathon that brought together high school students from around the globe for an intense three-day coding event from January 6th to 8th, 2023. With $192,800 in prizes and a robust participation of 278 students, the hackathon aimed to provide a comprehensive understanding of computer science, focusing on fostering collaboration and teamwork skills. Open to students aged 13 to 18, this beginner-friendly hackathon was more than just a competition; it was a mission to equip the younger generation with essential computer science knowledge. Through various educational resources and hands-on coding experiences, Git Init 2023 not only offered a thrilling coding marathon but also served as a pivotal stepping stone in students' journey towards real-world computer science applications. Empowering, educational, and exhilarating, Git Init 2023 was a milestone in making computer science accessible and engaging for high school students, setting them up for future success in both academics and community contributions.",
      images: [
        "https://cdn.discordapp.com/attachments/997774498973626418/1152690078867533954/gitinit.png",
        "https://cdn.discordapp.com/attachments/997774498973626418/1152690481638158336/image.png",
        "https://cdn.discordapp.com/attachments/997774498973626418/1152690739931787294/image.png",
        "https://cdn.discordapp.com/attachments/997774498973626418/1152691665736306798/image.png",
        "https://cdn.discordapp.com/attachments/997774498973626418/1152691710812504165/image.png",
        "https://cdn.discordapp.com/attachments/997774498973626418/1152691767951499334/image.png",
      ],
    },
  ];
  return (
    <div className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 py-20 px-4 sm:px-8 md:px-12 lg:px-24 backdrop-filter backdrop-blur-lg bg-white bg-opacity-70">
      <h2 className="justify-center flex text-gray-900 text-3xl md:text-4xl font-bold font-dela-gothic mb-4">
        Some Events We Hosted
      </h2>

      {events.map((event, index) => (
        <div
          key={index}
          className={`flex flex-wrap md:flex-nowrap mb-16 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <Carousel className="rounded-xl w-full md:w-[480px] h-[320px] flex-shrink-0">
            {event.images.map((img, imgIndex) => (
              <img
                key={imgIndex}
                src={img}
                alt={`image ${imgIndex + 1}`}
                className="h-full w-full object-cover"
              />
            ))}
          </Carousel>

          <div className="w-full md:ml-8 mt-6 md:mt-0 flex flex-col justify-center">
            <Typography
              variant="h2"
              color="blue-gray"
              className="font-dm-sans mb-2 text-bold"
            >
              {event.name}
            </Typography>
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-dm-sans mb-4 text-sm md:text-md"
            >
              <a target="_blank" rel="noreferrer" href={event.link}>
                {event.link}
              </a>
            </Typography>
            <Typography
              variant="h6"
              color="blue-gray"
              className="font-dm-sans mb-4 text-sm md:text-md"
            >
              {event.date}
            </Typography>
            <Typography
              color="blue-gray"
              className="font-dm-sans text-sm md:text-base"
            >
              {event.info}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
