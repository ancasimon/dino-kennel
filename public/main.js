const dinos = [
    {
        id: 'dino1',
        name: 'Annie',
        type: 'Ankylosaurus',
        pronunciation: 'ang-KILE-uh-SAWR-us',
        age: 100,
        owner: 'Zoe',
        adventures: [],
        health: 99,
        image: 'https://lh3.googleusercontent.com/rddrd-rpvkBD48-8K020lJekzjhYB8cVvrbYJ4auO4RlV3Mp7MpGBRq6MWT1pRJ34314sT9HdNZV-XTR7Ed0loDUa6Z9Upe2C3vPSjHCDbLi9-kAFv14jCGs1zHTkyjj0QKOVIEjrtKkgnpDX6rn5tAb9K0lXP30mRi6ok7zPvOpyZWciOhx8oAhMd1m0GzZUVw5vL9wKKT4fN39TJLevcdVtODpPXlKJac1i7o80ktGknDauIgoo8Ja77snVKNRVvAd-4WGfZ6GCXEoOD4NgneweoSwqoTLt_lMYzPOz06rNrOXwYM0Fs7_BZtxmAK3TposcJLSkEJWXu4olOkSIc71ndZRcctgQpY5mFuzyN0LyESWZjJEev58q-kZn2A2FAeopiv5bqI0IU7-Wc38pHKQELp4mRZVMbvyz4CmxK1Eli-4xvKOACPojfEcqgh1PiVo0oXOI3VMwSrBrtXWhZ8eL9m6zTgZi5sjzfH-BR-d-A6yh4yM9RjV_A2sZTzdNIacTzl1ypcsHSahei6LSxhoolv6upO1d2e4Kht6yR6CdW2MN3F4ySAnZ63PAb1gruQ1iG7qsjcSiaCDxpCi97XzSekmRWhtcFTipbQsF69XnwIMrcxIaYTr6OcUcbmj5gbOWOgqxpQ1JdmOGF8dqPEJ5m4zgkT2xrGVNejb1iDSEDS7OBJI5kD-TmbnTpVRqv1LVO8xqbX7kmaildZoJ7f7T1FsHr4lz8K0eeJ4jY-EJNhZhTFv-Q=w2078-h1558-no',
        alt: 'Picture of an Ankylosaurus',
        description: 'Ankylosaurus was covered with bony plates of armor and had a dangerous clubbed tail that it could swing to infect severe injury on its predators.',
        isCarnivorous: false
      },
      {
        id: 'dino2',
        name: 'Brach',
        type: 'Brachiosaurus',
        pronunciation: 'BRAK-e-o-SAWR-us',
        age: 100,
        owner: 'Luke',
        adventures: [],
        health: 1,
        image: 'https://lh3.googleusercontent.com/jhdbrqjd1xDCKyRKr8pGyuBfZlsC6-spWlO4QM9GYE4zrAXjg1D2k7ZuyJrRNxXgxQlnei0ibHmMsAjTR5-pytUhRH6NBiXkxffQRnpZWIxKqKkC7_ekcz5nWozbvePIYqT7rtJg4Xv2pVj0hsJQKFwFhXS8M3CLfOOdLSTpICZTEnOSniX4pXAqZlUi50Ced9LMCM7gpoWoz6HlljQm5McJ8TuGXWPwVYPn3RYStBxA_88KS48xxry5gNfpGio9lBFrmK8_7BI4Bao73YiwLp3GbFsK-6VFoZsfhOosdtDPJrDJTAZgBwHbG9tCRYhey0u6ZyQ45WDaVb5_W-WFPTSi39A1-nQopfXAFla20o8KZIuulXItlcoicpPUnj28tYgUo1TX3HCZbOUhxjnG3E_N6SUINAqNKoCPr1ssi9v_m2f1R-ulXYZCe_6jt50NVNKhXmZa8pfq3HtK-eo7ULOVwUZuGPNl759zSOpjwsG_3ZgOJKTpB3Sax1r4nQwPugkjvxoqmB33KgyiprWqNznbtq_IZHBTJUMQ9hw5H42ws_6iLInLUTh8xyg6EtE8eQ-R_Sg8wsS_ivHdfDDNQOfqNgx53Bpal7lBrUPbEEi9v2ht32Ez3uc-F-auy4zohnPqYLVF2CqZAR8IpM2zf6JlThpV-IAhOii87oGjGW3kaPz-3xrfw1RcEINqnUdlP4z7ZxcJ8ZUa3wuIn1E6i9-J79M5Q6mnOu7zljoLtPRB3gbKXKlO-w=w2078-h1558-no',
        alt: 'Picture of a Brachiosaurus',
        description: 'This plant-eating dinosaur was one of the largest animals known to have walked the earth. Standing up to 50 feet tall, its neck was 6 times longer than a giraffe\'s.',
        isCarnivorous: false
      },
      {
        id: 'dino3',
        name: 'Flipper',
        type: 'Pleisiosaurus',
        pronunciation: 'PLEE-see-uh-SAWR-us',
        age: 50,
        owner: 'Mary',
        adventures: [],
        health: 45,
        image: 'https://lh3.googleusercontent.com/8T7OE9rw6nv7unCgkBNb5k3VEMw4zb-508iTjo0RuDo9uyQCnNrIlqltTvj1v0nr84yNXyZY8gXSQY7R6dRJ3bKXg9fLsL9Qsga0OTjgj2DjUCcWczUwXA0Aa0mao-0X5Z71UAEMOm4epyJcGMqwEQm4yDA51GPJYk4KEBj5tl9DgWHLuHaI-5DLOUkqktz_UQJcxUbUMbWqLo7FRb_7YdcGkViVSPYbIKCGf16ZLFAPFlGc5yX6ifvy0uAIbkGogb-qsNb8owArGOljrYrkdavugO5VV2cbqGYr3vhzmM7ELNWK4YmMgAxdPifmx0iyfPrZ3g_A3KnDdkzpTwQ3AUP6HRr5Qkkb-WKXs0GKOrjyT1sGD9Zg7N6Y84wm3luX9iiU0Z2iISXxdIuZEMIoa2s3faunrjY3nveYWJkR9wUtjFUzv8TzldhJE_svaD8NUQ3hl_rDNHphxSjcXwGD0i6mdLsgom-T28GgkC0bP_KyVnukt1t3ydVZf0WxJNA1Jri-e-T5pD7d0YJqr-Bd9F9ktiocSGE7n2ngMUpQ6aOCFgAtvXHDdK0d29MHiLNaAw93EBct9vLDO2jhHNMEaNrPpN2xHql2lMx2PehTCgOLw5Sccjyp0-sqqcp8CV_jzbTAubzczrNSq24SAe9HmFAHTKWwGyVK1RJZVc_X-9kY_bphkbJyVl-Lkx1QGK6Idvu5QQ1T261h7GW20eTTLKo4UwD6jSbUDV3J-Uj9nbcwAAtsnJMukQ=w2078-h1558-no',
        alt: 'Picture of a Pleisiosaurus',
        description: 'This marine dinosaur had 4 wide flippers that propelled it through the water with ease. Its wide jaws and razor-sharp teeth allowed it to catch its prey just as easily.',
        isCarnivorous: true
      },
      {
        id: 'dino4',
        name: 'Lizzie',
        type: 'Tyrannosaurus',
        pronunciation: 'tye-RAN-uh-SAWR-us',
        age: 55,
        owner: 'Anca',
        adventures: [
            {
                title: "Archery",
                date: "March 1, 2020"
            },
            {
                title: "Swimming",
                date: "March 8, 2020"
            },
            {
                title: "Underwater digging",
                date: "March 9, 2020"
            }
        ],
        health: 70,
        image: 'https://lh3.googleusercontent.com/ObdwqmH2NZprbYVDLbyzs6jUtdbMoNZ5mik7LBcM2UNle8SsMedKweNCYfCZLirks5qWKkfcKJoFlqgoElL8fVhGctsY5rbSo3oGjxtoNqarj5VeWSdu_71vZPd4arIEMGaKcP3Un8xYgtl0vKuX0UKGPNNOK_5xGE4jACIwK-J7w2T3wJ7oWhYdMaqCiRi-XdBVS61Z1M8YdxUXwYm4NCbduB7wda6Ya9qQiNeGbdYN4zYfoDQIeGSPutfMcm_5qZ7VUN-FXjVmkEUVWC4_E_HeG0uwGwMuLBiEMQmGzWzXAmwqgPu1_B1oPoEGTcSCWg68Z8iszjAWxue9w_OYnoOYhiUIgczsZmQ9y76Nv9yzFiPbGKDMsoDkXRvCBOzOHnNnfKx4kADKe9XUYtaPZjgjXM7BIbn0oDDGHFliIuSKowXEHR-uwWc3Y7ZT-clmVXj9yRpXlYbTMjEJjfDbglGC26qztIXRC25VzjTlpC8vjZZ10bfiKuTmvHzjcrHhhHdvj7lZezUI57hOc_wiujiUR7RFS8C7hZIqQT6f3ZYXYPMmGBuA7ie4S2li01dfdesldq4wVC_TXRJpQOuFhBzZybRChlA6DlvadNcJFPzkm8GtzrgOV1fyxIQZ_kBFxpS7GNf4UwUaUstCMdDdr4kGxUamhmaM4gQe3dK-v1PsukbZRKfTRtvyhZijQKmqGo3SQOClL0fpwJxWQ2ogDRvldS7wLlDwnIjvoJN99aEUFRDz-BTKqg=w2078-h1558-no',
        alt: 'Picture of a Tyrannosaurus',
        description: 'Earning its name, which means \"tyrant lizzard king\", Tyrannosaurus Rex had a massive skull with powerful jaws able to eat up to 500 pounds of meat and bones in just one bite. This popular prehistoric predator can also be distinguished by its huge legs and small arms.',
        isCarnivorous: true
      },
      {
        id: 'dino5',
        name: 'Perry',
        type: 'Parasaurolophus',
        pronunciation: 'par-ah-SAWR-OL-uh-fus',
        age: 20,
        owner: 'Greg',
        adventures: [
            {
                title: "Cave exploration",
                date: "February 22, 2020"
            },
            {
                title: "Swimming",
                date: "March 5, 2020"
            },
            {
                title: "Archery",
                date: "March 9, 2020"
            }
        ],
        health: 5,
        image: 'https://lh3.googleusercontent.com/7WHgm69nBseVFm69h9mmDUZEwuH4yt3RB-HcNeRvWyAyENijpnoPze-p6SFFX07YHjX-baTgXGxmnKfeN2OLxnR4kwzPewx7qFplcEQkKZme34eV0mOlfzKHwSwAvbWPAh_P40cp2xTjjfzVfrYouKIerJ6aULm5B5DflrpU6ylFXi6V_IgmmV2SkJ1gVs7YId8goMXnJ_8S_AZn7pu54dMxyq3mHHT38Occ9wtw0gFLBJJUxY4slZ1BL2N_9lSYTWDIGCDRzWqxAZP9fmtADOT0VryXNCCL0ocZ7O3oo49AyTkXUqlzqXFmgklUlH9rj3Us2ZcWWwvFw30W8fSKZXfm5BuoSk4JGj28jzubIE_wDlaxHJvJLPM1pR_MDe2uUjJyFiex0ygKj3VYqNwdMT0nNdp7kKHBhXgHSfYIDRri4rUROJUOVHwLxOEUJ2N0Lv42DN7md90Kjlx08Yo4okXPtHwtgsd9muw2Ltcn6G71cX_DsVHggX7vicZZKfUAY88_HUdSxjnGIa0mcZ50dljWrB7HzGWmttWhtfo1fTo5tQlC-OWAAPhn75WE-enNMvVrdRcg7YycbghJb7xhq1ASxJEjWFSQWGbcfrrMV1tMjPUzFtXFdTHgYcd7YRUDAnJMd_0QpdxjpCQEwvM_PaDYqdXmmP1mCmyXrXAhv18-b3DMNs_02HDI1DT5kZP6y7G2uePiOvO6KMQiDHM62t3cs_lWs3TFLEGGRfhuZ2-92O_1YVq8gQ=w2078-h1558-no',
        alt: 'Picture of a Parasaurolophus',
        description: 'The large crest on its head is an identifying characteristic of the Parasaurolophus. It is believed this crest helped the dinosaur hear and regulate its body temperature.',
        isCarnivorous: false
      }, 
      {
        id: 'dino6',
        name: 'Punk',
        type: 'Stegosaurus',
        pronunciation: 'STEG-uh-SAWR-us',
        age: 10,
        owner: 'Zoe',
        adventures: [],
        health: 0,
        image: 'https://lh3.googleusercontent.com/fnEkzduinNtE5XxsAYfcKaKZ40r8p84OqjEQyhPV_8yl8jMc5Qmbf8RG7e-IHAZiyNEQXfv_jmGemGJ7s7ld4HkbpYSeiqC-du90RROv1SRRzUMAYCWjhyPpDDeA1IFZsJoBDa8MvbX1tHS6RWu59J0XZSA28LiYEJ-bkd1DIM-YDeEQRa9DMPaPOw5mRx18_lkkOeoKJQWTKOnHSUVz5pSYxAhvjrps16KpIkN5ES2hC6IylKCR3EFcwrWy2HqEus7qiTzV0lDo7IyzQkyarpTJhHKkDJ-LrcFAnI3HaWkzyoZ1STkdFb7HdqqApsEUs6-MZz8bHTW0YvKpqy72yq4BKmsNHTXmWmWxmU9ABfNQH_BiAFonUOm2TBNEwzVAHO4OlxdRz8But9wqqJBs75ThpmMNLpxlOYrwXZXHTcFZqSLbYwC3GXxalwkAy5nNL3w8wPCGpPvsPCDNuYem_BTYPRP4nA2ZUB3sQPV3sKyDLqqET9oNkiJ0ybc-PkUCf2yvPSFYOpegpjLIHKcR7EVTysLW7t78lvyMkd5yBnKggrgJxuRvKaso-fdLO5crn--kJlYUGiyZRHPvy1nZm7OW-Q8szJzrynUqbrNcZZsY_uXFfQjgDGMxmjOihClLdhcByFSaSp2O6gYqgpg7_d3KSi9sr9YCqpo13T_SIMt-hxx5XuSAmGQf3BG1=w2078-h1558-no',
        alt: 'Picture of a Stegosaurus',
        description: 'Stegosaurus is distinguished by the double row of large triangular plates along its back and the four long spikes on its tail. Some scientists believe the plates worked like solar panels to provide the Stegosaurus with body heat.',
        isCarnivorous: false
      },
      {
        id: 'dino7',
        name: 'Spiney',
        type: 'Spinosaurus',
        pronunciation: 'SPY-nuh-SAWR-us',
        age: 76,
        owner: 'Luke',
        adventures: [],
        health: 0,
        image: 'https://lh3.googleusercontent.com/6Hlok9eUhvUXzQXNWx2O7iWglF5qEQaOwTx-wYfp83ao8RYGuZ5wvF0ryJbcW5BdKMeKb9KDQs1IUi28nFjY8juBa00W-DuehWy7_wzRDETkVZO2aex8wTJjml32TJN7MFcx36NpdvR_SS0bINgWAm_SZ3camXfdhbFukU5aJSpuDLJ5h1gtlbbwmlQuOCoX2-Xp--PGDkVSS3PJnWbuF9-6pmFucQeTAqhJ_BciuWySVygOMS_Um-mB5RNHkJEo6b7uJM0doH0qXxe4fmY_AImRYXHtU4g72iO7sI_m2VZT6YJoCe8s0IICRyV9KbYoaiAyWQCGv2P0QWhu_3aX2TQEJZMbCFuHDtnT4Y61jo2F-bEGm1_ttbXhhFFirPmV8blKTwSs6StZvJ5sxTFsBQlnZVWh_J6nXeoeLr0eBubis_W0h1e9HUPdX-djjLXrqr966mTV85kn60JSaF1NHGNdXrF99uNKsrmA0iROuBRzEDypA5TbpFUSYNd-Ezoc8CC33QnzzZbPj1ndQPOMwF0pE1szIue5TnngaNmetDJJUoaMUNiu9_WQfZAsKMUj6ss3rpkMupwignN9hcVVJZN0gwnX9cE3xwYVdLXRyHAvireIWVkCUPb83uMV6bYSGXoQmLXf9drhZKRe8uuVINob3--l8r7KYibbbXZVfHhCKk5Q6LLUwBawHHf-fH68W9oCdJc0dsB-ZK4OCi3kt1b1tMyjZQruqaQvGaUcevP7zFVGNkG64w=w2078-h1558-no',
        alt: 'Picture of a Spinosaurus',
        description: 'The Spinosaurus is easily identified by the giant sail on its back. It gets its name, which means \"spine lizzard\", from the up to 7-feet spines that make up this sail.',
        isCarnivorous: true
      },
      {
        id: 'dino8',
        name: 'Walker',
        type: 'Hypacrosaurus',
        pronunciation: 'hye-PACK-ruh-SAWR-us',
        age: 47,
        owner: 'Anca',
        adventures: [
          {
            title: "Cave exploration",
            date: "February 1, 2020"
        },
        {
            title: "Archery",
            date: "March 1, 2020"
        },
        {
            title: "Archery",
            date: "March 10, 2020"
        }
        ],
        health: 30,
        image: 'https://lh3.googleusercontent.com/G3vVhB44tTYf5bPc6FyudF94MySAi6xgur45DbL55XMLgeHWyHwQSXCJa1cvTsiexxa03bdGYwMSKg5HtwYa-bSfPuONzvOGO1pQno2y-VkVn3KbktdTuRjFd6yFdWpGHNSso4_QsMxuj7SFKru95M7WOyP-EnlIU2IaguYGSl3A3jq7HgijDz5XB5E8Z_ZPNHYaFYU3nr0YP8ozuYH-2iZpvV1D3dO3zaCYr7uC_nd_r8qyDmR3O7LgukSMnwzWe22M3H1sAIVheiLyM7r3puAKGH-xiaui3fBKLHLPfRq3vPm7uNzN_Djia7CKkzX0Ou--7ZvNJKJUrWpjLO8URdYIyofUfvZpypb4X1qndSMAuLYI9dqS5Hg1FD58aKkBk-IlTHKxur1Jh5BGMsiKsnms1KRZ_W-rcg-q4ngGhkscx4LrpRlb6z_y2fB6wtmsumNlIwaPCKa7gwLgwoh0CTjurlHxWd5cek3wuWIB103mg6yde4nE0QgCXSkPpfhNDTnFU6g2BRGBlyhSFjfBjUNjw_JussVyYKTXORMW1KG9Woaj4mqaBrP0J69tg2Z6dKlwxz_-MpJYd9-wmLp3ub2v-xS0Iy35jojLDRwgnXCri8zxRlx31NNHvNbfOf5BUCa4Ak5G0JuFeYfVHLRImGW2Z3tRcM6RxuPgt7USE_GcuGx4S6T8XNPVrwIkL9cDahXWkNBiiYRG808PoY0RfqZBBHGK-S3YXQkGH2tMF-4bCyvVp4zlXQ=w2078-h1558-no',
        alt: 'Picture of a Hypacrosaurus',
        description: 'This upright-walking dinosaur is distinguished by the crest on its head and row of spines along its back.',
        isCarnivorous: false
      },
      {
        id: 'dino9',
        name: 'Rhino',
        type: 'Styracosaurus',
        pronunciation: 'stih-RAK-uh-SAWR-us',
        age: 500,
        owner: 'Anca',
        adventures: [],
        health: 31,
        image: 'https://lh3.googleusercontent.com/R_uZ5811o9mSs0v_5n3kDz0YbZqT6nADl6deJaL04CSFOyqstcP4GCNZ6tj6M-U5SahYOPiQJGvgW3EloydSqAt49z1uk_yiY0O-juEudUvUA_DhdOlmBmw8Kfkb9kw3cZWng88PpRXcLdRvTXxyN6fxqTDwtfqwIXVK7qkWXfwp60cQLesTRZ4BedG1yf0g3lWGyP9gFq2t54ARIOQKYx3lklYOoYeDoloZ8XG5WkoqzToRgksrwiy1_-EnQ7C_UwaeHO6WcUIJqSy2dxJQLsLly7x_fXpAwTcbV25BYSdxiVPdyFQesjc8fytfDECshfux3O1GbU_WOc3phdOPx1aDZonNpwIWeY0ha6HYgoQnRP9fXz2J_rLJpSX8-HhVMsEohw6faxVpIZsFRke0_dMIE7ZGNU-G4AW3INWF-MivFv_uwCw_V7ar4J99pe-uokeq83Nh6xSxUq3Q3ch0_drZHQuzbY_bqXEhVR70ja2b7Gu-15WKlBork7QE1Xi5nB5Zb2twsr6_59B2K4P-gwMZyJvxtmN6c1l_YvHmnL5w9pLyQSEKSx0pkuNDScxX9nopWlEF8HEqC5SPYqDSg2d9nTqmRv3EUHr5VxKaoJuwbWuOH_ZJwX-FTW2c1MemvKrG74-ySdcd9ITDhoqMy-9R4e5ssTGrZDn70yAwlZ02-qgISlr5tSbiwzdlhbnGtTp4xURTYNqxwsBbP6L0K1lxniE4jtWnYIc55N8h5eYou4lFteXIAw=w2078-h1558-no',
        alt: 'Picture of a Styracosaurus',
        description: 'Styracosaurus is easy to identify. It had a short frill along its head with 6 long spikes along the edge and a snout with a 2-foot horn that it used for self-defense.',
        isCarnivorous: false
      },
      {
        id: 'dino10',
        name: 'Leif',
        type: 'Anatotitan',
        pronunciation: 'an-AT-oh-TITE-an',
        age: 50,
        owner: 'Anca',
        adventures: [],
        health: 35,
        image: 'https://lh3.googleusercontent.com/PtTFNKHTJdzsHACGcTvIfPcVzZzh7n5ItAMT3YPeTJLlxBVMgvzyLHkVtX5T-nIwwtaWkB7jawg5pZV6Iekc6tRFZtpvG8O2XAhjHHKs-C2e2ay3nIdyK-4w69zp_sm6_ywpcwsqH8O74-ysVj9fnNcF88pl8t9hQI8Aeifokjkjl9wRv1hw9y7Vp6DayttTOWrVl9wgkk6sKkkQ4tGFqjwevYKro8v7kWXL1zprtWFrNO3iW78An5wL3xa9L3Ft24PNkDJvRjNyS00CSeERzzoXDWlqD6EUE2gIYbgPUobG_Fhxc1My6so6Of3ctbDxGDF6Eq38BiQWVVjLeDljuUxnGG8Sa_BC0t1lzky9GIl3MZiDJl-1qQfFwqvZWKWeLuVsPyEe17ohSfosSrI6eFnwQKatu-ckrPPuVjy2PQRS_3phVlGfwJypP61vdBgXLhid14YfEdbtv1LYF8apglV9JdQTjaL3tQl_65G6uP6fV_s9QvqRdB94mUvvYU0fHvxHr9d76mFpgtcyJ_CTa2of8uyAy5BluA7522WkTzEiVDhnGwW39Ym0kWqqjZZ3M2ChJRCSp4krT7ZyNnbfiNOCpkuMC4oq68syqH0zfqJ0JOVPJOnkhJ3jSermDhI0BAGEaf8SKcQxZ9lbzeQZk-EXZPEbwnqK0YxhYrSz6skNTrnkgwz6UQB5p3OGAE6StV3Vxh7m6GaNMiKwHONtpPfKTVV_8zK1OdsICn0l561FQxI6fqymRw=w2078-h1558-no',
        alt: 'Picture of a Anatotitan',
        description: 'Named for its duck bill, the Anatotitan had hundreds of cheek teeth to grind its dinner of prehistoric plants. This dinosaur can also be distinguished by its large back legs and long tail.',
        isCarnivorous: false
      }
];

const adventures = [
    {
      id: 'adventure1',
      title: 'Archery',
      healthHit: 50
    },
    {
      id: 'adventure2',
      title: 'Baking',
      healthHit: 2
    },
    {
      id: 'adventure3',
      title: 'Brawling',
      healthHit: 25
    },
    {
      id: 'adventure4',
      title: 'Caving',
      healthHit: 20
    },
    {
      id: 'adventure5',
      title: 'Chasing unicorns',
      healthHit: 15
    },
    {
      id: 'adventure6',
      title: 'Digging underwater',
      healthHit: 10
    },
    {
      id: 'adventure7',
      title: 'Fishing',
      healthHit: 7
    },
    {
      id: 'adventure8',
      title: 'Hiking',
      healthHit: 1
    },
    {
      id: 'adventure9',
      title: 'Playing in traffic',
      healthHit: 23
    },
    {
      id: 'adventure10',
      title: 'Swimming',
      healthHit: 50
    }
  ];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

// NOTES ABOUT BUILDING THE SINGLE DINO VIEW BELOW:
// Now - we start defining the single view: The goal is that - when you click the View button on the all dinos page - then they run the viewSingleDino function), 
// To make that happen: we assign the same class to all these View buttons (on all the dino cards) and then add an event to all of them in the main initial printDionos function's domString.
// Once the View button is clicked, then, the kennel is emptied (an empty string gets pushed to the div with the 'kennel' id) and a new printToDom function runs, which creates the single dino view (which basically replaces the view with all the dinos generated by the printDinos function) - see the viewSingleDino function. 
// Next - we also associate a close function (closeSingleViewEvent) with the Close button we have have added to the single View. 

const closeSingleViewEvent = () => {
    printToDom('single-view', '');
    buildAllDinos(dinos);
};

// Now - we want to add a way to see the single dino:
//  When I click the View button, I want to grab the ID of the parent card - I can do that by using the .closest method and asking it to pull the id of the parent with a class of card(.card) that is closest to my target element - so (1) e.target gives me the target element I clicked on (in our case, the View button; (2) .closest is the method looking for the next thing up in the tree of this element; (3) .card tells it that what I am looking for is a parent with a class of card; (4) id then tells it to pull the id of that parent: 
// To make all this work, I had to give the parent card the unique ID of each dino - see the item in the printDinos domString that does that by using the ${dinoArray[i].id}!
// .find and other array methods - do a for loop over the dinos' array until they meet a condition (specified in the curly brackets/or the second part of the equation (if you use curly brackets, you need to specify "return"  at the beginning/inside the curly brackets), after the => arrow - the dino id that I am currently on is the same as the id of a dino in the array): - this is what the find array method does:
// const find = () => {
//     for (let i= 0; i < dinos.length; i++) {
//         if(dinoId === dinos[i].id) {
//             return dinos[i];
//         }
//     };
// };
// In the actual find array method used below, what goes in the parentheses is the equivalent of the dinos[i].id; so that takes you to this: dinos.find((currentDino) => dinoId === currentDino.id);
// Note that sometimes people don't rename the variable and just use x instead: dinos.find((x) => dinoId === x.id);

const adventureTableBuilder = (advArray) => {
  let domString = '';
  domString += '<table class="table">';
  domString += '<thead class="thead=light">';
  domString += '<tr>';
  domString += '<th scope="col">#</th>';
  domString += '<th scope="col">Date</th>';
  domString += '<th scope="col">Type</th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  for (let i=0; i < advArray.length; i++) {
      domString += '<tr>';
      domString += `<th scope="row">${i+1}</th>`;
      domString += `<td>${moment(advArray[i].date).format('MMMM Do YYYY, h:mm:ss a')}</td>`;
      domString += `<td>${advArray[i].title}</td>`;
      domString += '</tr>';
  }
  domString += '</tbody>';
  domString += '</table>';

  return domString;
};


const viewSingleDino = (e) => {
    const dinoId = e.target.closest('.card').id;
    const selectedDino = dinos.find((currentDino) => dinoId === currentDino.id);
    let domString = '';
    domString += '<div class="container d-inline-block text-right">';
    domString += '<button id="close-single-view" type="button" class="btn btn-dark mb-4 mt-4"><i class="fas fa-window-close"></i></button>';
    domString += '</div>';
    domString += '<div class="container">';
    domString +=    '<div class="row">';
    domString +=        '<div class="col-md-4">';
    domString +=            `<img class="img-fluid vh-25 picture" style="width: 250px;" src="${selectedDino.image}" alt="${selectedDino.alt}"></img>`;
    domString +=        '</div>';
    domString +=        '<div class="col-md-4">';
    domString +=            `<h2>Name: ${selectedDino.name}</h2>`;
    if (selectedDino.isCarnivorous === true) {
      domString +=            '<p><i class="fas fa-drumstick-bite larger meat"></i></p>';
    } else {
      domString +=            '<p><i class="fas fa-leaf larger veggie"></i></p>';
    }
    domString +=            `<p>Age: ${selectedDino.age}</p>`;
    domString +=            `<p>Type: ${selectedDino.type}</p>`;
    domString +=            `<p>(that is, "${selectedDino.pronunciation}")</p>`;
    domString +=            `<p>${selectedDino.description}</p>`;
    domString +=            `<p>Owner: ${selectedDino.owner}</p>`;
    domString +=            printProgress(selectedDino, selectedDino.health < 1 ? 'graveyard' : 'single-view');
    domString +=        '</div>';
    domString +=        '<div class="col-md-4">';
    domString +=          '<h3>See what your pet dino\'s been up to\!</h3>';
    domString +=          adventureTableBuilder(selectedDino.adventures);
    domString +=        '</div>';
    domString +=    '</div>';
    domString += '</div>';
    clearAllDinos();
    printToDom('single-view', domString);
    document.getElementById("close-single-view").addEventListener('click', closeSingleViewEvent);
};

const singleDinoAddEvents = () => {
    const dinoViewButtons = document.getElementsByClassName('single-dino');
    for (let i=0; i < dinoViewButtons.length; i++) {
        dinoViewButtons[i].addEventListener('click', viewSingleDino);
    };
};

// // The feature to increase the dino's health every time you pet him  requires:
// 1- an event listener that is similar to the view single dino event listener - see petEvents below; 
// 2 - that you use the .closest method that we used earlier in viewSingleDino to get the parent card ID;
// 3 - findIndex to find the index of the selected dino object in the array in order to know which dino's health score we should increase - then you can say dinos[dinoPosition].health = which means that the health value of the dino object in the position specified in the square brackets.

const dinoHealth = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId);
    if (dinos[dinoPosition].health < 100 && dinos[dinoPosition].health !== 0) {
        dinos[dinoPosition].health += 1;
        buildAllDinos(dinos);
        };
    };

const petEvents = () => {
    const dinoPetButtons = document.getElementsByClassName('dino-photo');
    for (let i=0; i < dinoPetButtons.length; i++) {
        dinoPetButtons[i].addEventListener('mouseleave', dinoHealth);
    };
};

// This is the function that will delete the dino:
// 1 - it takes a parameter of the event that is taking place on the page and the it looks for the target of that event and then for the closest parent with a class of a card (.card); 
// 2 - Then, once it has the card's id, it uses the findIndex method to identify the position (in the array) of the dino that has the same exact id as the card we just identified (that contains the button that was the target of the event);
// 3 - then it removes that dino from the array using the splice method: first, it specified what position to start removing an ID from (the position identified by the dinoPosition variable) and then it specifies the method should remove only 1 item from the array.
// 4 - then it finally calls the printDinos function to print the whole array again - minus the one dino that was removed!! 
// 5- we will also add this deleteDinoEvent function to the printDinos funciton so that it gets built into the array when the list of dinos (including the delete buttons) get built!

const deleteDinoEvent = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId);
    if (dinos[dinoPosition].health > 0) {
      dinos.splice(dinoPosition, 1);
      buildAllDinos(dinos);
      };
};

// To know which dino to delete with the delete function above, we need to add event listeners to the delete buttons on each dino card so that we can then use the action of clicking the Delete button as an event (and thus be able to identify the target of the event and then the parent with the card class and then get that id!!). Once the dino is found, this will trigger the deleteDinoEvent function above!!! This is what the findDinoToDelete function below does!

const deleteEvents = (divId) => {
  if (divId !== 'graveyard') { 
    const dinoDeleteButtons = document.getElementsByClassName('delete-dino');
    for (let i=0; i <dinoDeleteButtons.length; i++) {
        dinoDeleteButtons[i].addEventListener('click', deleteDinoEvent);
    }
  }
};

const feedMe = (e) => {
    const dinoId = e.target.closest('.card').id;
    const dinoPosition = dinos.findIndex((currentDino) => currentDino.id === dinoId);
    if (dinos[dinoPosition].health < 90 && dinos[dinoPosition].health !== 0) {
        dinos[dinoPosition].health += 10;
        buildAllDinos(dinos);
    } else if (dinos[dinoPosition].health > 89 && dinos[dinoPosition].health <100) {
        dinos[dinoPosition].health = 100;
        buildAllDinos(dinos);
    }
};


const feedEvents = (divId) => {
  if (divId !== 'graveyard') { 
    const dinoFeedButtons = document.getElementsByClassName('feed-dino');
    for (let i = 0; i < dinoFeedButtons.length; i++) {
        dinoFeedButtons[i].addEventListener('click', feedMe);
    }
  }
};

const addAdventure = (e) => {
  const dinoId = e.target.closest('.card').id;
  const dinoPosition = dinos.findIndex((thisDino) => thisDino.id === dinoId);
  const randomAdvIndex = Math.floor(Math.random()*adventures.length);
  const newAdventure = {
      title: adventures[randomAdvIndex].title,
      date: Date.now()
  };
  if (dinos[dinoPosition].health > 0) {
    dinos[dinoPosition].adventures.push(newAdventure);
    dinos[dinoPosition].health -= adventures[randomAdvIndex].healthHit;
    buildAllDinos(dinos);
    };
};

const advEvents = (divId) => {
  if (divId !== 'graveyard') { 
  const advButtons = document.getElementsByClassName('adv-button');
  for (let i=0; i<advButtons.length; i++) {
      advButtons[i].addEventListener('click', addAdventure);
  }
}
};

const printProgress = (dino, divId) => {
  let domString = '';
  if (divId !== 'graveyard') {
    domString += '<div class="progress" style="height: 30px;">';
    domString += `<div class="progress-bar progress-bar-striped ${dino.health < 40 ? 'bg-danger' : 'bg-success'}" role="progressbar" style="width: ${dino.health}%" aria-valuenow="${dino.health}" aria-valuemin="0" aria-valuemax="100">Health: ${dino.health}%</div>`;
    domString += '</div>';
  } else {
    domString += '<div><i class="fas fa-skull-crossbones fa-3x"></i></div>';
  }
  return domString;
}

const printButtons = (divId) => {
  let domString = '';
  domString += '<div class="row">';
  domString += '<div class="col-6"><button type="button" class="col-12 m-1 btn btn-primary single-dino"><i class="fas fa-binoculars"></i></button></div>';
  domString += `<div class="col-6"><button type="button" class="col-12 m-1 btn btn-success feed-dino ${divId === 'graveyard' ? 'disabled' : ''}"><i class="fas fa-hamburger"></i></button></div>`;
  domString += `<div class="col-6"><button type="button" class="col-12 m-1 btn btn-warning text-white adv-button ${divId === 'graveyard' ? 'disabled' : ''}"><i class="fas fa-hiking"></i></button></div>`;
  domString += `<div class="col-6"><button type="button" class="col-12 m-1 btn btn-dark delete-dino ${divId === 'graveyard' ? 'disabled' : ''}"><i class="fas fa-trash-alt"></i></button></div>`;
  domString += '</div>';
  return domString;
};

const printDinos = (dinoArray, divId) => {
    let domString = '';
    if (divId==='kennel') {
      domString += '<div class="container kennel pt-2 mt-3">';
      domString += '<h6 class="section-header">Here are our friends who are doing great:</h6>';
      domString += '<div class="d-flex flex-wrap">';
    } else if (divId==='hospital') {
      domString += '<div class="container hospital pt-2 mt-3">';
      domString += '<h6 class="section-header">Here are our friends who need some TLC:</h6>';
      domString += '<div class="d-flex flex-wrap">';
    } else if (divId==='graveyard') {
      domString += '<div class="container graveyard pt-2 mt-3">';
      domString += '<h6 class="section-header">Here are our friends whom we miss dearly:</h6>';
      domString += '<div class="d-flex flex-wrap">';
    };
    for (let i=0; i < dinoArray.length; i++) {
        domString += '<div class="col-md-4">';
        domString += `<div id="${dinoArray[i].id}" class="card border-dark mb-3">`;
        domString += `<img class="card-img-top dino-photo vh-25% mx-auto mt-2 picture" style="width: 250px;" src="${dinoArray[i].image}" alt="${dinoArray[i].alt}">`;
        domString += '<div class="card-body">';
        domString += `<h2 class="card-title">${dinoArray[i].name}</h2>`;
        domString += printProgress(dinoArray[i], divId);
        domString += printButtons(divId);
        domString += '</div>';
        domString += '</div>';
        domString += '</div>';
    }
    domString += '</div>';
    domString += '</div>';
    printToDom(divId, domString);
};

const addEvents = () => {
  singleDinoAddEvents();
  petEvents();
  deleteEvents();
  feedEvents();
  advEvents();
};


// When the form gets submitted, we want to clear the form as well as collapse the form under the Add Dino button. 

// 1 - To CLEAR the form: We will use the reset method - see below; otherwise - the old way was that you could create a function to clear the form once data /// has been submitted:
// const clearNewDinoForm = () => {
//     document.getElementById('dino-name').value = '',
//     document.getElementById('dino-type').value = '',
//     document.getElementById('dino-age').value = '',
//     document.getElementById('dino-owner').value = '',
//     document.getElementById('dino-image').value = ''
// };

// 2 - To COLLAPSE the form, we want to remove the "show" class that gets added automatically by default by Bootstrap when the Add Dino button is clicked/when the accordion gets expanded! We will do this then: document.getElementById('collapseOne').classlist.remove('show');
// We will add it to the newDino function because it is not something that will be reused so it does not need its own function. 

// The newDino function prevents the default browser behavior after any event that calls this function (WILL NEED TO USE THIS WITH MOST FORMS TO PREVENT DEFAULT REFRESH BEHAVIOR), AND then creates a brandNewDino object (using the values entered in the form input fields and their unique ids), AND then pushes the brandNewDino into the dinos array we defined earlier.

const newDino = () => {
    const brandNewDino = {
        id: `dino${dinos.length+1}`,
        name: document.getElementById('dino-name').value,
        type: document.getElementById('dino-type').value,
        age: document.getElementById('dino-age').value,
        owner: document.getElementById('dino-owner').value,
        adventures: [],
        health: 100,
        imageUrl: document.getElementById('dino-image').value
    };
    dinos.push(brandNewDino);
    document.getElementById('new-dino-form').reset();
    document.getElementById('collapseOne').classList.remove('show');
    buildAllDinos();
};

const findHospitalDinos = (dinos) => {
    const hospitalDinos = dinos.filter((x) => x.health > 0 && x.health < 40);
    printDinos(hospitalDinos, 'hospital');
};

// Note for me: We deleted the old function to build the graveyard section beacuse we replaced it with the print dinos function - to which we added a second parameter of a divId so that it can print various collections of dinos (live, sick, dead) to one ofthe 3 divs in index (kennel, hospital, graveyard). -- we did the same with the initial hospital builder function.

const findGraveyardDinos = (dinos) => {
  const deadDinos = dinos.filter((thisDino) => thisDino.health < 1);
  printDinos(deadDinos, 'graveyard');
};

const findLiveHealthyDinos = (dinos) => {
  const liveDinos = dinos.filter((thisDino) => thisDino.health > 39);
  printDinos(liveDinos, 'kennel');
};

const clearAllDinos = () => {
    printToDom('kennel', '');
    printToDom('hospital','');
    printToDom('graveyard', '');
    $('#filters').addClass('hide');
};

const buildAllDinos = () => {
    findLiveHealthyDinos(dinos);
    findHospitalDinos(dinos);
    findGraveyardDinos(dinos);
    addEvents();
};

const alertNewDinoValidation = () => {
  $('#newDinoModal').modal('show');
};

const submitEvent = (event) => {
  event.preventDefault();
  if (document.getElementById('dino-name').value !== '') {
    newDino();
    } else {
      alertNewDinoValidation();
    } 
};

// In the init function, we add the event listener for the click event - when user clicks the button with the submit-new-dino id, then the newDino function gets called. 
const init = () => {
  document.getElementById('submit-new-dino').addEventListener('click', submitEvent);
  buildAllDinos();
};

init();
