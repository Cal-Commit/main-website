import React from "react";
import { Carousel, Typography, IconButton } from "@material-tailwind/react";

export default function OurEvents() {
  const events = [
    {
      name: "Oasis Hacks",
      date: "August 6th, 2023",
      info: "Oasis Hacks, hosted by Cal Commit, is an exciting hackathon event that brings together creative minds and tech enthusiasts to collaborate and build innovative solutions. This year, the hackathon will take place on August 6th from 9am to 9pm PST at Circuit Launch in Oakland, California.      ",
      images: [
        "https://lh3.googleusercontent.com/pw/AIL4fc-BTSgk3vWb0HKcEBMSSxunY3tYTouyijiqcp6PC10y0HQzduNwq9IA5WI2XITkFML5Yoe8cxCf227OMPGWvLQYqwgsasomi2lV2Pn2Q9srT9H61dbsNXOr5mLJ6-qpLS64U1vjaLPiQoY-xHf3z_vr=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_c5abyQUfHtKcYdwYuGJtFnyCIe2z96aGqY5gabmz-mMzfVsTQfUJ3-J7jBm-Uv-3Cx_LvIk-YUEhIBR1bga8Z3MsoTRzdlm0V21_6UmOVhNul9aP7HVpqj6xX_Fc_ofKwjjV6Ag2nZSF0mJkbqgyc=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-kWRQv9gWd-u-9P4gsrqzXS3Cd9Xho_eBVMR_7WO6Z16zzrp4rYoMrMAdaoVErYzMYvQ8934FwW1qxsb3RADE--QzduD5QvyK0Em1Ti--fL8MQb-qbUW_mJnhwSLXOtbDSroDHLE-FTqUnZ2_Yl0vz=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_q59OnFkDxmbd7LTmbviXxrOMH8vd0JVSr0ZduuqM9LnRDZA9U9wTIUXCyg-cZ84Z30ZrOUvMb-9rIHkIMOdPuCK1GhiT7S0G227CiUAPsDiConcdoMGWFtQKou4kJpMn-Nd-iNwLD1YgTPu5LAf8j=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_6ezI_9iOn4LSMOCD7Bq8lZT8FNkdARbd_4i2FxSUZj4bvA3M0LxgGT7vvcq-RhhBKfPNZj-JYrp33B0dohKG4gsQMWNkdJp-fk8K4CKJm9Vk2pw8t7vK-rPYmLFn6RCdGwIYvJStjprTOyOrgGNot=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_eKBPqVAavF_yY3nMxfAddT0dc48voT620yHIKgqZ0a_YOsI3d2W4ip33JOWCkm5YGYzbECv8FkAsk4eQqLqT4gIA6-YTy1xK0w7MRPH6xHqUzI3NNvNt8b1HSJEBjdyN2q2eRRJg056HHwFHBKq-4=w680-h906-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_BQ_BiA0MP_YZC6qFtvbjhYCnjrFm5n4rpwPmSXYi6N1_9A46mMTp-cFOGX1Xw3wqj23ea6kaXEKrPoh4UAvZkf7wH2kd4-mZpZVjLJmTlEOh7T-fWiDIn223Z4wPgix26Y5JSBvSpdVFJe9uRvZRj=w1366-h1820-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8q6pOgGFInqjRO9J_owArYnrgHSVxlLWaCP98evW9IB6rJX5q8ZyM-oPFy9DuHoWdGW5cVjiIlqVGBtClIXe6nuP_wsB1eU_nL_ssejNYGTnNJ-RHLDjzj8H2QhdG1I6a_GJTqZ4dNGHVe5FH39l6q=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc9hoqk0_xmFDV-OpFIv79-jZ3hNtBdMzXNIiFs_ds-iUfSvbG962KDG-JtbRg8FQnmj68JNL_GX9-vl_FNqIMTLT2lPgC66KBVM0dYQaaF-68UD5MIerjAdZBY_rBaJE0Ahjl4sP9DAwssS23zA8V_y=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc9QNcNQ2WHpZ2Hnlyo1GrZEcZwEdPcGL10KbH8KUzMX5qfi48nkPHpZadVM1ndW-MzQPeVsH4X-S__KxuTIJbgvwwh80AnN-Cq-nEy5o8I8RDFSmdmhdJi9-Xb6-oAzqJ8BC8KL0KVQabyD-qJh4CjU=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-IxUdSGZdEWX5jWrKGekXmzC9_B0WTqenT8dtftjkM_kAD0gdkZbEW0L_uzSurxK5ga9cSl8Cx5tPGIfK1dUCLnWAUPG_l4wvU_cAXEfbLF4QL3tk4f4GHABaS-SqTf_sUeyG6twJhcDEkxz7KlE4S=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8pNJYBvwJvrKkXS6RXopKuTK48W2d7lLOJDA-pnGkDmGaC5N9RC-0p7_N13etI9m8xS-E8CNefLLrQJwBau7pRhrWPulBkSd92Yc78LJrkvokJPwlTvbWDjfFVpNm6pAMa_SvYYyabS5GJhKmED7mc=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8a3SRw0jw065s6vNZCvxaUwMgxiOUDHg9_k9BesJWaZMSt8YiHz4ZsWHLB_7lr28rzCSttVk6v3DcYO-fFUe1huPYpxgK5oxzuZtSJQuIXfj3w_oVJKBKWsZ3POxOfFAQ8pO4LM6fInMVYa2zrYfaK=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_pb3tNGu3aCA7OhdQwYjiIY8cYzdYA8P2q3m17GuH0rDTTlRitn92SKF__zAzvWXV6xsVTyxvdb4eybXROmid2doMUnIk3ycQa8_BHZT2Pirm3th0R4TsUzh6gOti1aGYUkyKTjFZYhBiHD8RDAVnS=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8LX8kRhrIDmqIkxbmpq5GLXULtGLUD5URMizC30jbxbc_ISNwnwxF9pHaTulnYkN0ofLX0qIx7kPHHmfZnVEbEK5JwmvzZcqkzylh2Frj799DPaT3PZ6QCucOYYEZhyvy99T0_dYOqSItEDIB2q5Qt=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc99DynFvVgc2DNZG9QX1ElkJtKUDCjz7gOe3PGQYkcFx39cqSroPyYslfq4qsz3IMp8XRyk3X1TfiiKQc36ckKhUjpwgH5AEBMPDA-M4a-I0uV_w1mFSBs6FyIWHUUyBt5E5fOkZbcTcdZkS7-kCUujzg=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-2eSKNrZF7sOyY3tZb7TjgOj5nWcthNsfKonUPo-CTZid7C5gSb_eZWstOffXsQRwrDqTuSgzsTxrwGLD3cn0XGznMe1AdH93LXwWb8MsIjk4tmKdeTvzDaqX1tIT7VkuAQ0F_Pv_PUwPKtzoE4Wogag=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-zhSIE3QyoEkGpHKpE_NZM70ZsUMZ0t_AINhlzzkZobLCOV1ryt6OvazYeESs7AM5CDUtjxMTA6gjAiXwpm50zFVy66m6g9KQ4tXKMYwMPu0O2ENL9bGSm1muICMkLyCdxoZX0cN6uv8tligmfL9TVKg=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_Zsmh04dDXkvSPZAip2oDu1PGClahs7iIytgfa56HfV_tzWrLeB_fCfG81CVw6DAosOyKj02_A_HdM4so8ADC2mifRMDLhqQjPbvIwxBEdpQmkMccqfd3sr0Jf1OVfFt_o1vTLZnI13ne6utl0feeROg=w2594-h1946-s-no?authuser=0",
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
      date: "January 6th - January 8th, 2023",
      info: "Git Init 2023 was an online event hosted in the first week of 2023! We had over 300 participants and 10+ sponsors and over 50+ projects submitted! We had a great time and we hope to see you at our next event!",
      images: [
        "https://lh3.googleusercontent.com/pw/AIL4fc-BTSgk3vWb0HKcEBMSSxunY3tYTouyijiqcp6PC10y0HQzduNwq9IA5WI2XITkFML5Yoe8cxCf227OMPGWvLQYqwgsasomi2lV2Pn2Q9srT9H61dbsNXOr5mLJ6-qpLS64U1vjaLPiQoY-xHf3z_vr=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_c5abyQUfHtKcYdwYuGJtFnyCIe2z96aGqY5gabmz-mMzfVsTQfUJ3-J7jBm-Uv-3Cx_LvIk-YUEhIBR1bga8Z3MsoTRzdlm0V21_6UmOVhNul9aP7HVpqj6xX_Fc_ofKwjjV6Ag2nZSF0mJkbqgyc=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-kWRQv9gWd-u-9P4gsrqzXS3Cd9Xho_eBVMR_7WO6Z16zzrp4rYoMrMAdaoVErYzMYvQ8934FwW1qxsb3RADE--QzduD5QvyK0Em1Ti--fL8MQb-qbUW_mJnhwSLXOtbDSroDHLE-FTqUnZ2_Yl0vz=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_q59OnFkDxmbd7LTmbviXxrOMH8vd0JVSr0ZduuqM9LnRDZA9U9wTIUXCyg-cZ84Z30ZrOUvMb-9rIHkIMOdPuCK1GhiT7S0G227CiUAPsDiConcdoMGWFtQKou4kJpMn-Nd-iNwLD1YgTPu5LAf8j=w627-h836-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_6ezI_9iOn4LSMOCD7Bq8lZT8FNkdARbd_4i2FxSUZj4bvA3M0LxgGT7vvcq-RhhBKfPNZj-JYrp33B0dohKG4gsQMWNkdJp-fk8K4CKJm9Vk2pw8t7vK-rPYmLFn6RCdGwIYvJStjprTOyOrgGNot=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_eKBPqVAavF_yY3nMxfAddT0dc48voT620yHIKgqZ0a_YOsI3d2W4ip33JOWCkm5YGYzbECv8FkAsk4eQqLqT4gIA6-YTy1xK0w7MRPH6xHqUzI3NNvNt8b1HSJEBjdyN2q2eRRJg056HHwFHBKq-4=w680-h906-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_BQ_BiA0MP_YZC6qFtvbjhYCnjrFm5n4rpwPmSXYi6N1_9A46mMTp-cFOGX1Xw3wqj23ea6kaXEKrPoh4UAvZkf7wH2kd4-mZpZVjLJmTlEOh7T-fWiDIn223Z4wPgix26Y5JSBvSpdVFJe9uRvZRj=w1366-h1820-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8q6pOgGFInqjRO9J_owArYnrgHSVxlLWaCP98evW9IB6rJX5q8ZyM-oPFy9DuHoWdGW5cVjiIlqVGBtClIXe6nuP_wsB1eU_nL_ssejNYGTnNJ-RHLDjzj8H2QhdG1I6a_GJTqZ4dNGHVe5FH39l6q=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc9hoqk0_xmFDV-OpFIv79-jZ3hNtBdMzXNIiFs_ds-iUfSvbG962KDG-JtbRg8FQnmj68JNL_GX9-vl_FNqIMTLT2lPgC66KBVM0dYQaaF-68UD5MIerjAdZBY_rBaJE0Ahjl4sP9DAwssS23zA8V_y=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc9QNcNQ2WHpZ2Hnlyo1GrZEcZwEdPcGL10KbH8KUzMX5qfi48nkPHpZadVM1ndW-MzQPeVsH4X-S__KxuTIJbgvwwh80AnN-Cq-nEy5o8I8RDFSmdmhdJi9-Xb6-oAzqJ8BC8KL0KVQabyD-qJh4CjU=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-IxUdSGZdEWX5jWrKGekXmzC9_B0WTqenT8dtftjkM_kAD0gdkZbEW0L_uzSurxK5ga9cSl8Cx5tPGIfK1dUCLnWAUPG_l4wvU_cAXEfbLF4QL3tk4f4GHABaS-SqTf_sUeyG6twJhcDEkxz7KlE4S=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8pNJYBvwJvrKkXS6RXopKuTK48W2d7lLOJDA-pnGkDmGaC5N9RC-0p7_N13etI9m8xS-E8CNefLLrQJwBau7pRhrWPulBkSd92Yc78LJrkvokJPwlTvbWDjfFVpNm6pAMa_SvYYyabS5GJhKmED7mc=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8a3SRw0jw065s6vNZCvxaUwMgxiOUDHg9_k9BesJWaZMSt8YiHz4ZsWHLB_7lr28rzCSttVk6v3DcYO-fFUe1huPYpxgK5oxzuZtSJQuIXfj3w_oVJKBKWsZ3POxOfFAQ8pO4LM6fInMVYa2zrYfaK=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_pb3tNGu3aCA7OhdQwYjiIY8cYzdYA8P2q3m17GuH0rDTTlRitn92SKF__zAzvWXV6xsVTyxvdb4eybXROmid2doMUnIk3ycQa8_BHZT2Pirm3th0R4TsUzh6gOti1aGYUkyKTjFZYhBiHD8RDAVnS=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc8LX8kRhrIDmqIkxbmpq5GLXULtGLUD5URMizC30jbxbc_ISNwnwxF9pHaTulnYkN0ofLX0qIx7kPHHmfZnVEbEK5JwmvzZcqkzylh2Frj799DPaT3PZ6QCucOYYEZhyvy99T0_dYOqSItEDIB2q5Qt=w1460-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc99DynFvVgc2DNZG9QX1ElkJtKUDCjz7gOe3PGQYkcFx39cqSroPyYslfq4qsz3IMp8XRyk3X1TfiiKQc36ckKhUjpwgH5AEBMPDA-M4a-I0uV_w1mFSBs6FyIWHUUyBt5E5fOkZbcTcdZkS7-kCUujzg=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-2eSKNrZF7sOyY3tZb7TjgOj5nWcthNsfKonUPo-CTZid7C5gSb_eZWstOffXsQRwrDqTuSgzsTxrwGLD3cn0XGznMe1AdH93LXwWb8MsIjk4tmKdeTvzDaqX1tIT7VkuAQ0F_Pv_PUwPKtzoE4Wogag=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc-zhSIE3QyoEkGpHKpE_NZM70ZsUMZ0t_AINhlzzkZobLCOV1ryt6OvazYeESs7AM5CDUtjxMTA6gjAiXwpm50zFVy66m6g9KQ4tXKMYwMPu0O2ENL9bGSm1muICMkLyCdxoZX0cN6uv8tligmfL9TVKg=w2594-h1946-s-no?authuser=0",
        "https://lh3.googleusercontent.com/pw/AIL4fc_Zsmh04dDXkvSPZAip2oDu1PGClahs7iIytgfa56HfV_tzWrLeB_fCfG81CVw6DAosOyKj02_A_HdM4so8ADC2mifRMDLhqQjPbvIwxBEdpQmkMccqfd3sr0Jf1OVfFt_o1vTLZnI13ne6utl0feeROg=w2594-h1946-s-no?authuser=0",
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
  ];
  return (
    <div className="bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 py-20 px-4 md:px-8 lg:px-12 xl:px-24 backdrop-filter backdrop-blur-lg bg-white bg-opacity-70">
                  <h2 className="justify-center flex text-gray-900 text-3xl font-bold font-dela-gothic mb-4">Some Events We Hosted</h2>

      {events.map((event, index) => (
        <div
          key={index}
          className={`flex flex-wrap md:flex-nowrap mb-16 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          <Carousel
            className="rounded-xl w-[480px] h-[320px] flex-shrink-0"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>{" "}
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>{" "}
              </IconButton>
            )}
          >
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
            <Typography variant="h4" color="blue-gray" className="font-dm-sans mb-2">
              {event.name}
            </Typography>
            <Typography variant="h6" color="blue-gray" className="font-dm-sans mb-4">
              {event.date}
            </Typography>
            <Typography color="blue-gray"className="font-dm-sans">{event.info}</Typography>
          </div>
        </div>
      ))}
    </div>
  );
}
