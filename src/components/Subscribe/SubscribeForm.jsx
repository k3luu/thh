import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";
import TextField from "@material-ui/core/TextField";

const Container = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 0 auto;
  background: #eee;
`;

const Title = styled.div`
  font-size: 20px;
  letter-spacing: 0.6px;

  ${breakpoint("md")`
    margin: 0 auto;
  `};
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;

  form {
    flex-grow: 1;
  }
`;

const IconHolder = styled.div`
  flex-grow: 1;
  text-align: center;
  padding: 0 20px;

  svg {
    height: 170px;
    width: 100px;
  }
`;

const SubscribeButton = styled.button`
  margin-top: 30px;
  display: inherit;
`;

class SubscribeForm extends React.Component {
  render() {
    return (
      <Container>
        <Title>
          Sign up with your email address to receive news and updates!
        </Title>

        <SubContainer>
          <IconHolder>
            <svg
              id="b9950e65-c983-427f-969f-411e60d4718f"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="733.51"
              height="728.97"
              viewBox="0 0 733.51 728.97"
            >
              <defs>
                <linearGradient
                  id="1e50e1f7-79f5-452b-a40c-a2d98084d9bb"
                  x1="383.47"
                  y1="728.97"
                  x2="383.47"
                  y2="400.92"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="gray" stopOpacity="0.25" />
                  <stop offset="0.54" stopColor="gray" stopOpacity="0.12" />
                  <stop offset="1" stopColor="gray" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient
                  id="065ea879-0bf6-43b6-9672-9e36e849f5ca"
                  x1="238.26"
                  y1="361.82"
                  x2="838.21"
                  y2="361.82"
                  xlinkHref="#1e50e1f7-79f5-452b-a40c-a2d98084d9bb"
                />
                <linearGradient
                  id="459818a5-69c2-4f7f-8bb2-5507c3d29640"
                  x1="465.73"
                  y1="249.13"
                  x2="465.73"
                  y2="125.75"
                  xlinkHref="#1e50e1f7-79f5-452b-a40c-a2d98084d9bb"
                />
                <linearGradient
                  id="2f211934-bfe1-48dc-bf69-4a6889a77622"
                  x1="264.33"
                  y1="382.43"
                  x2="264.33"
                  y2="305.75"
                  gradientTransform="matrix(0 -1 -1 0 760.81 597.66)"
                  xlinkHref="#1e50e1f7-79f5-452b-a40c-a2d98084d9bb"
                />
                <linearGradient
                  id="fdaec826-1474-477a-aab7-79681abb65ed"
                  x1="212.21"
                  y1="392.96"
                  x2="212.21"
                  y2="316.28"
                  gradientTransform="matrix(0 -1 -1 0 821.81 562.29)"
                  xlinkHref="#1e50e1f7-79f5-452b-a40c-a2d98084d9bb"
                />
                <linearGradient
                  id="230aae4a-4ba3-43a0-a33b-500e3dc2a25d"
                  x1="295.6"
                  y1="440.27"
                  x2="295.6"
                  y2="336.33"
                  gradientTransform="matrix(0 -1 -1 0 768.63 669.04)"
                  xlinkHref="#1e50e1f7-79f5-452b-a40c-a2d98084d9bb"
                />
                <linearGradient
                  id="598da11b-697d-4f9c-9fd7-d6849a884081"
                  x1="224.95"
                  y1="454.54"
                  x2="224.95"
                  y2="350.6"
                  gradientTransform="matrix(0 -1 -1 0 851.31 621.1)"
                  xlinkHref="#1e50e1f7-79f5-452b-a40c-a2d98084d9bb"
                />
                <linearGradient
                  id="1b1d52ac-2d33-4d8b-a499-27df2fc326e7"
                  x1="627.39"
                  y1="372.38"
                  x2="627.39"
                  y2="313.03"
                  gradientTransform="matrix(-.65 .76 .76 .65 837.43 -649.66)"
                  xlinkHref="#1e50e1f7-79f5-452b-a40c-a2d98084d9bb"
                />
                <linearGradient
                  id="72adf1b2-6031-4d64-80db-157af34e8b1b"
                  x1="303.02"
                  y1="618.34"
                  x2="303.02"
                  y2="531.38"
                  gradientTransform="rotate(32.36 1049.232 -85.334)"
                  xlinkHref="#1e50e1f7-79f5-452b-a40c-a2d98084d9bb"
                />
              </defs>
              <rect
                x="346.26"
                y="400.92"
                width="74.42"
                height="328.05"
                fill="url(#1e50e1f7-79f5-452b-a40c-a2d98084d9bb)"
              />
              <rect
                x="353.11"
                y="400.92"
                width="62.67"
                height="322.18"
                fill="#eceff1"
              />
              <path
                d="M779.59,228.64H444.43A88.94,88.94,0,0,0,411,236.09c-34.07,15.1-53.9,38.8-59.5,91.36V448.88l-88.81-.94c-17.86,0-24.39,28.08-24.39,47.06H838.21V290.93C838.21,256.53,812,228.64,779.59,228.64Z"
                transform="translate(-185.78 -83.31)"
                fill="url(#065ea879-0bf6-43b6-9672-9e36e849f5ca)"
              />
              <path
                d="M270.85,158.06H602.93a40.68,40.68,0,0,1,40.68,40.68V400.92a0,0,0,0,1,0,0H270.85a0,0,0,0,1,0,0V158.06A0,0,0,0,1,270.85,158.06Z"
                fill="#f56700"
              />
              <path
                d="M263,158.06h0a90.09,90.09,0,0,1,90.09,90.09V356.83A44.09,44.09,0,0,1,309,400.92H217a44.09,44.09,0,0,1-44.09-44.09V248.15A90.09,90.09,0,0,1,263,158.06Z"
                fill="#f56700"
              />
              <path
                d="M263,158.06h0a90.09,90.09,0,0,1,90.09,90.09V356.83A44.09,44.09,0,0,1,309,400.92H217a44.09,44.09,0,0,1-44.09-44.09V248.15A90.09,90.09,0,0,1,263,158.06Z"
                opacity="0.2"
              />
              <polygon
                points="502.94 125.75 456.43 125.75 428.52 125.75 428.52 181.06 428.52 249.13 462.3 249.13 462.3 181.06 502.94 181.06 502.94 125.75"
                fill="url(#459818a5-69c2-4f7f-8bb2-5507c3d29640)"
              />
              <polygon
                points="497.06 125.75 457.89 125.75 434.39 125.75 434.39 176.67 434.39 239.34 457.89 239.34 457.89 176.67 497.06 176.67 497.06 125.75"
                fill="#ffcc80"
              />
              <rect
                x="378.38"
                y="270.95"
                width="76.68"
                height="124.77"
                transform="rotate(-83.06 276.792 396.563)"
                fill="url(#2f211934-bfe1-48dc-bf69-4a6889a77622)"
              />
              <rect
                x="380.44"
                y="272.35"
                width="71.56"
                height="120.54"
                transform="rotate(-83.06 276.289 395.845)"
                fill="#faf8e4"
              />
              <g opacity="0.6" fill="#f56700">
                <rect
                  x="364.5"
                  y="296.74"
                  width="15.34"
                  height="11.35"
                  transform="rotate(-173.06 276.743 266.401)"
                />
                <rect
                  x="373.69"
                  y="330.46"
                  width="58.89"
                  height="3.68"
                  transform="rotate(-173.06 307.712 296.28)"
                />
                <rect
                  x="388.54"
                  y="340.56"
                  width="42.94"
                  height="2.45"
                  transform="rotate(-173.06 314.59 305.77)"
                />
              </g>
              <rect
                x="428.85"
                y="287.7"
                width="76.68"
                height="124.77"
                transform="rotate(-83.06 327.256 413.312)"
                fill="url(#fdaec826-1474-477a-aab7-79681abb65ed)"
              />
              <rect
                x="430.91"
                y="289.1"
                width="71.56"
                height="120.54"
                transform="rotate(-83.06 326.759 412.6)"
                fill="#faf8e4"
              />
              <g opacity="0.6" fill="#f56700">
                <rect
                  x="414.96"
                  y="313.49"
                  width="15.34"
                  height="11.35"
                  transform="rotate(-173.06 327.21 283.154)"
                />
                <rect
                  x="424.15"
                  y="347.21"
                  width="58.89"
                  height="3.68"
                  transform="rotate(-173.06 358.179 313.032)"
                />
                <rect
                  x="439.01"
                  y="357.31"
                  width="42.94"
                  height="2.45"
                  transform="rotate(-173.06 365.052 322.522)"
                />
              </g>
              <rect
                x="328.36"
                y="288.88"
                width="103.94"
                height="169.12"
                transform="rotate(-83.06 240.401 436.673)"
                fill="url(#230aae4a-4ba3-43a0-a33b-500e3dc2a25d)"
              />
              <rect
                x="331.16"
                y="290.78"
                width="97.01"
                height="163.39"
                transform="rotate(-83.06 239.723 435.7)"
                fill="#fff"
              />
              <g opacity="0.6" fill="#f56700">
                <rect
                  x="309.54"
                  y="323.84"
                  width="20.79"
                  height="15.38"
                  transform="rotate(-173.06 224.511 295.519)"
                />
                <rect
                  x="322"
                  y="369.54"
                  width="79.83"
                  height="4.99"
                  transform="rotate(-173.06 266.487 336.021)"
                />
                <rect
                  x="342.13"
                  y="383.24"
                  width="58.21"
                  height="3.33"
                  transform="rotate(-173.06 275.813 348.885)"
                />
              </g>
              <rect
                x="396.77"
                y="311.59"
                width="103.94"
                height="169.12"
                transform="rotate(-83.06 308.803 459.376)"
                fill="url(#598da11b-697d-4f9c-9fd7-d6849a884081)"
              />
              <rect
                x="399.56"
                y="313.48"
                width="97.01"
                height="163.39"
                transform="rotate(-83.06 308.13 458.407)"
                fill="#fff"
              />
              <g opacity="0.6" fill="#f56700">
                <rect
                  x="377.95"
                  y="346.55"
                  width="20.79"
                  height="15.38"
                  transform="rotate(-173.06 292.919 318.23)"
                />
                <rect
                  x="390.41"
                  y="392.25"
                  width="79.83"
                  height="4.99"
                  transform="rotate(-173.06 334.895 358.732)"
                />
                <rect
                  x="410.54"
                  y="405.94"
                  width="58.21"
                  height="3.33"
                  transform="rotate(-173.06 344.22 371.59)"
                />
              </g>
              <path
                d="M447.82,242.35h0a89.8,89.8,0,0,0-34.35,6.8,90.77,90.77,0,0,1,12.81-.92h0a90.09,90.09,0,0,1,90.09,90.09v143h21.54V332.44A90.09,90.09,0,0,0,447.82,242.35Z"
                transform="translate(-185.78 -83.31)"
                opacity="0.2"
              />
              <path
                d="M94.59,369.58H353.11a0,0,0,0,1,0,0v31.34a0,0,0,0,1,0,0H63.25a0,0,0,0,1,0,0v0A31.34,31.34,0,0,1,94.59,369.58Z"
                fill="#f56700"
              />
              <path
                d="M94.59,369.58H353.11a0,0,0,0,1,0,0v31.34a0,0,0,0,1,0,0H63.25a0,0,0,0,1,0,0v0A31.34,31.34,0,0,1,94.59,369.58Z"
                fill="#fff"
                opacity="0.2"
              />
              <polygon
                points="657.37 70.58 654.4 72.03 654.74 71.42 654.48 71.5 654.85 71.23 694.87 0 715.33 17.45 732.89 33.7 727.85 36.16 733.51 46.15 657.37 70.58"
                fill="url(#1b1d52ac-2d33-4d8b-a499-27df2fc326e7)"
              />
              <polygon
                points="713.31 19.31 729.35 34.19 656.63 70.34 695.33 20.74 713.31 19.31"
                fill="#f56700"
              />
              <polygon
                points="713.31 19.31 729.35 34.19 656.63 70.34 695.33 20.74 713.31 19.31"
                opacity="0.2"
              />
              <polygon
                points="694.59 3.35 656.63 70.34 713.31 19.31 694.59 3.35"
                fill="#f56700"
              />
              <polygon
                points="729.82 45.7 656.71 69.85 717.82 24.23 729.82 45.7"
                fill="#f56700"
              />
              <polygon
                points="121.67 86.97 126.45 87.71 125.71 87.01 126.12 87.01 125.48 86.79 38.62 4.42 17.54 37.69 0 68.04 8.12 69.3 4.52 85.74 121.67 86.97"
                fill="url(#72adf1b2-6031-4d64-80db-157af34e8b1b)"
              />
              <polygon
                points="21.18 39.42 5.16 67.19 122.6 86.31 46.96 33.64 21.18 39.42"
                fill="#f56700"
              />
              <polygon
                points="21.18 39.42 5.16 67.19 122.6 86.31 46.96 33.64 21.18 39.42"
                opacity="0.2"
              />
              <polygon
                points="40.47 8.99 122.6 86.31 21.18 39.42 40.47 8.99"
                fill="#f56700"
              />
              <polygon
                points="9.49 83.51 122.28 85.67 16.99 48.27 9.49 83.51"
                fill="#f56700"
              />
            </svg>
          </IconHolder>

          <form
            className="subscribe-form"
            name="subscribe"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="subscribe" />

            <TextField
              id="email"
              name="email"
              label="Email"
              margin="normal"
              required
              fullWidth
            />
            <SubscribeButton type="submit">Subscribe</SubscribeButton>
          </form>
        </SubContainer>
      </Container>
    );
  }
}

export default SubscribeForm;
