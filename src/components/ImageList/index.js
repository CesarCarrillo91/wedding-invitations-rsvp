import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";

const itemData = [
  {
    img:
      "https://lh3.googleusercontent.com/pw/AM-JKLXd13AMVDiP9Ux_eJ462Bfq06JzGF1YtNg9NHWrMyT-Bo8EaYFG5O3fj7fsH_JJxgd5ttv7a-V4DlPU_pRAapvKbHGTZJ4D4JXZhNzUbCU6mDBPQ9NP5-f9l_4w_vRR6Wueb23kW8yBkSx0blkF2G_y9w=w496-h661-no?authuser=0",
    title: "IC1",
    author: "cesar",
    cols: 2
  },
  {
    img:
      "https://lh3.googleusercontent.com/S0tTEwSfspPaFZH82zlbHj7jsZUVd4QJ_j6VDqQIcG3lNRrOO-R_0qRX1Y_jsy9ngDqEapgDjaezP6CtkK7yGMQ-8-r4DgkvS70YJoxd_DR5jQWwpcfHpqOoRR149PGi0sQxfPmv0zB3c70grUZDN7BtbNKiE1dW35GYpIYMp1lKYeuXdSMYdaYnqAANPXny96lUUlF3I58tl1-s5Vaf2qcd6gmmr_o0BxuB_Pe5Ve7W73RFZBLS4Qr1oCHpT3LuuYwg4NlaLV9_m5_3IQ2a0yFDpgKVD9vxTp4GHtnf82BOzWJDGZtMGQyICfipN6ceTJxhr5YmzmyVEr30zINA3mjLeWpL121yAsnm0spcAawsKtF-FFU7yxcdXPKvRW_WtR1t1pP_Y_n1GiUOC_4wIPWT4ReVMqgh-GDm8jKqSq7M9KifWv9w2-2foZKEh71GcnI9A27kSvMrZWQ4he4vVHHi4UZd7oi_hsQP2LTzvna-BCMeH1KcTpoZI9thMshoqkmpMwsTiYm1E09b4-TP6PkGtmymQJHEHMo7fp6r6j8R9WZRj5tx9XE-YhiDAQX0rdh2nRNDVnNXi8qW--DWtQCpDj7HhAVYm0fCPQoDf3GUu3Zmh1pMRkDnTfOlFcKoACC9cFzx16kZVXDmzI4NyCxI-eUChzTIRVOvQIbY-gYASYr4iyJrZD-6fO2Zs7K5THqxX8FewjKBsGLDGwf-bRDAHw=w496-h661-no?authuser=0",
    title: "IC2",
    author: "cesar",
    cols: 1
  },
  {
    img:
      "https://lh3.googleusercontent.com/opgYgGGnKlikDjVxAAZ9SGaORgH6FWUMk2zfUy2tv8c3ahbZgPQ_phq-q0SjzNiN0CRGx6zEANl1UOtBu7MmGnmyz8IlPUKWezoX61faojSbRGvbsyKeV5Fp_SlZCNwwfNPNbmzw5gK4XrN_rQOLeVT5yIaQQfmpc1btsCaWAd-eUrAGeDCkSSzFRtPxaiBZb4VhOWUuM7WCcJngRsHEjOigaZy7ZZnchXzJJjcs4pIAiImFOxGHYvns-mKgoum0nhsugd6gUh0Lr-yQfJK-VmANFXx9HSYQUKi6hSLs2gCDj5_WdHNXlyMY9Tj0Ao69uQjY8VcnxDbCqfYo8yoG7OmWSf6swf1Yd2JaCjAc4JM6iLmLi_8BLhFQ4_Q7QgNYsNPbZZNFKYmgPlTxjHeTNS-DR-UAjvBOIXM1wxw3zcAPYFNU1rA5mTbKDpUpDzBOeW_OBj8Xg2ZB_CN3gmtNQTXDCnqnlpUw6R2MUUt3inxDeBVh2Si2q-Q-F08nbjDo6Q_I7L99tqJlbYNVZSOMQTc4avdesVHHqwPG9S-DDOv9fiL7yBrdtjDPtTl50-IIJSnUM30LMQKTnnfB8E75troTn6nRIe9Kw4alkdLI6XH911c2aJD08jc_xvKY3rHIJhAHZmBh_yU30Xr1PRRNOZUk0YaSb2-aS90laRzah8e42dPNxAvsNfhl-Om0IvwFluukKAZgTdXeidCWrY6UkBKNew=w882-h661-no?authuser=0",
    title: "IC3",
    author: "cesar",
    cols: 3
  }
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  imageList: {
    width: 500
  }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function BasicImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
