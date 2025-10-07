import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "../main.css";

const information = [
  {
    id: 1,
    layout: "intro",
    title: "Magna sed nullam nisl adipiscing",
    textStrong: "Lorem ipsum dolor",
    text: ` sit amet consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.`,
    image: ["/images/pic02.jpg"],
    imageAlt: "pic2",
  },
  {
    id: 2,
    layout: "text-icons",
    title: "Feugiat consequat tempus ultrices",
    textStrong: "Etiam tristique libero",
    text: ` eu nibh porttitor amet fermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.`,
    text2:
      "Vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.",
    image: ["/images/pic02.jpg", "/images/pic02.jpg", "/images/pic02.jpg"],
    imageAlt: "pic2",
  },
  {
    id: 3,
    layout: "gallery",
    title: "Ultrices erat magna sed condimentum",
    textStrong: "Integer mollis egestas",
    text: `  nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.`,
    title2: "Erat aliquam",
    textP:
      "Vehicula ultrices dolor amet ultricies et condimentum. Magna sed etiam consequat, et lorem adipiscing sed dolor sit amet, consectetur amet do eiusmod tempor incididunt  ipsum suspendisse ultrices gravida.",
    title3: "Nisl consequat",
    textH3S2P:
      "Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam sed facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet mauris. Ut magna finibus nisi nec lacinia ipsum maximus.",
    image: ["images/01.jpg", "images/02.jpg", "images/03.jpg", "images/04.jpg"],
    imageS2: ["images/05.jpg", "images/06.jpg", "images/07.jpg"],
    title4: "Lorem gravida",
    text4:
      "Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aenean ornare velit lacus, ac varius sed enim lorem ullamcorper dolore.  ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis.",
    imageS3: ["images/08.jpg", "images/09.jpg", "images/10.jpg"],
  },
  {
    id: 4,
    layout: "page-start",
    title: "Duis sed adpiscing veroeros amet",
    textStrong: "Proin tempus feugiat",
    text: `  sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.`,
    link: ["Get Started", "Learn More"],
  },
  {
    id: 5,
    layout: "Get in touch",
    title: "Get in touch",
    textStrong: "Auctor commodo",
    text: `interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis.`,
    email: "information@untitled.ext",
    phone: "(000) 000-0000",
    Address: `1234 Somewhere Road, Nashville, TN 00000`,
    elsewhere: "Elsewhere",
    elsewhereimage: [
      "/images/1608908_github_icon.svg",
      "/images/icon/icon-instagram.svg",
      "/images/icon/icon-facebook.svg",
      "/images/icon/icon-twitter.svg",
    ],
    copyright: "&copy; Untitled. All rights reserved. Design:",
    textLink: "HAMED-MORADY",
  },
];

export default function Home() {
  const [show, setShow] = useState(false);
  const [imgIndex, setImgIndex] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);
  useEffect(() => {
    if (imgIndex) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [imgIndex]);
  const openLightbox = (img) => {
    setImgIndex(img);
    setLoading(true);
  };
  return (
    <div id="wrapper">
      <section className="intro page-first">
        <header className={`${show ? "show" : ""}`}>
          <h1>Paradigm Shift</h1>
          <p>
            A free responsive site template designed  by:<a href="https://github.com/Hamed-Morady/paradigm-shift.git">GIT HUP</a> /
            <a href="https://github.com/Hamed-Morady/paradigm-shift.git">HAMED-MORADY</a>
          </p>
          <ul className="action">
            <li>
              <a href="#first" className="arroy scrolly">
                <span className="label">Next</span>
              </a>
            </li>
          </ul>
        </header>
        <div className="content">
          <span className="fill">
            <img src="./images/pic01.jpg" alt="girl-img" />
          </span>
        </div>
      </section>
      {information.map((box) => (
        <Section key={box.id} data={box} openLightbox={openLightbox} />
      ))}
      {imgIndex ? (
        <div className="light-box" onClick={() => setImgIndex(null)}>
          {loading && (
            <Spinner
              animation="border"
              role="status"
              variant="dark"
              style={{ position: "absolute" }}
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          <img
            style={{ display: loading ? "none" : "flex" }}
            src={imgIndex}
            alt="lightbox"
            onClick={(e) => e.stopPropagation()}
            onLoad={() => setLoading(false)}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
function Section({ data, openLightbox }) {
  switch (data.layout) {
    case "intro":
      return (
        <section className="intro">
          <header className="child2" id="first">
            <h2>{data.title}</h2>
          </header>
          <div className="content">
            <p>
              <strong>{data.textStrong}</strong>
              {data.text}
            </p>
            <span className="image">
              <img src={data.image} alt={data.imageAlt} />
            </span>
          </div>
        </section>
      );
    case "text-icons":
      return (
        <section className="intro">
          <header className="child2">
            <h2>{data.title}</h2>
          </header>
          <div className="content text-icons">
            <p>
              <strong>{data.textStrong}</strong>
              {data.text}
            </p>
            <ul className="feature-icons">
              <li className="icon laptop">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width="24"
                  height="24"
                >
                  <path d="M128 96C92.7 96 64 124.7 64 160L64 400L128 400L128 160L512 160L512 400L576 400L576 160C576 124.7 547.3 96 512 96L128 96zM19.2 448C8.6 448 0 456.6 0 467.2C0 509.6 34.4 544 76.8 544L563.2 544C605.6 544 640 509.6 640 467.2C640 456.6 631.4 448 620.8 448L19.2 448z" />
                </svg>
                Consequat tempus
              </li>
              <li className="icon bolt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width="24"
                  height="24"
                >
                  <path d="M434.8 54.1C446.7 62.7 451.1 78.3 445.7 91.9L367.3 288L512 288C525.5 288 537.5 296.4 542.1 309.1C546.7 321.8 542.8 336 532.5 344.6L244.5 584.6C233.2 594 217.1 594.5 205.2 585.9C193.3 577.3 188.9 561.7 194.3 548.1L272.7 352L128 352C114.5 352 102.5 343.6 97.9 330.9C93.3 318.2 97.2 304 107.5 295.4L395.5 55.4C406.8 46 422.9 45.5 434.8 54.1z" />
                </svg>
                Etiam adipiscing
              </li>
              <li className="icon signal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width="24"
                  height="24"
                >
                  <path d="M552 120C552 106.7 541.3 96 528 96C514.7 96 504 106.7 504 120L504 520C504 533.3 514.7 544 528 544C541.3 544 552 533.3 552 520L552 120zM424 192C410.7 192 400 202.7 400 216L400 520C400 533.3 410.7 544 424 544C437.3 544 448 533.3 448 520L448 216C448 202.7 437.3 192 424 192zM344 312C344 298.7 333.3 288 320 288C306.7 288 296 298.7 296 312L296 520C296 533.3 306.7 544 320 544C333.3 544 344 533.3 344 520L344 312zM216 384C202.7 384 192 394.7 192 408L192 520C192 533.3 202.7 544 216 544C229.3 544 240 533.3 240 520L240 408C240 394.7 229.3 384 216 384zM112 448C98.7 448 88 458.7 88 472L88 520C88 533.3 98.7 544 112 544C125.3 544 136 533.3 136 520L136 472C136 458.7 125.3 448 112 448z" />
                </svg>
                Libero nullam
              </li>
              <li className="icon cog">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width="24"
                  height="24"
                >
                  <path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z" />
                </svg>
                Blandit condimentum
              </li>
              <li className="icon alt">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width="24"
                  height="24"
                >
                  <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                </svg>
                Lorem ipsum dolor
              </li>
              <li className="icon code">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  width="24"
                  height="24"
                >
                  <path d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z" />
                </svg>
                Nibh amet venenatis
              </li>
            </ul>
            <p>{data.text2}</p>
          </div>
        </section>
      );
    case "gallery":
      return (
        <section className="intro multi-section">
          <header className="child2">
            <h2>{data.title}</h2>
          </header>
          <div className="content">
            <p>
              <strong>{data.textStrong}</strong>
              {data.text}
            </p>
            <section>
              <header>
                <h3>{data.title2}</h3>
                <p>{data.textP}</p>
              </header>
              <div class="content">
                <div className="gallery">
                  {data.image.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="img"
                      onClick={() => openLightbox(img)}
                    />
                  ))}
                </div>
              </div>
            </section>
            <section>
              <header>
                <h3>{data.title3}</h3>
                <p>{data.textH3S2P}</p>
              </header>
              <div class="content">
                <div className="gallery">
                  {data.imageS2.map((img,i) => (
                    <img key={i} src={img} alt="img"   onClick={() => openLightbox(img)}/>
                  ))}
                </div>
              </div>
            </section>
            <section>
              <header>
                <h3>{data.title4}</h3>
                <p>{data.text4}</p>
              </header>
              <div class="content">
                <div className="gallery gallery-second">
                  {data.imageS3.map((img,i) => (
                    <img key={i} src={img} alt="img"  onClick={() => openLightbox(img)} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      );
    case "page-start":
      return (
        <section className="intro get-start">
          <header className="child2">
            <h2>{data.title}</h2>
          </header>
          <div className="content">
            <p>
              <strong>{data.textStrong}</strong>
              {data.text}
            </p>
            <div className="box-btn">
              {data.link.map((btn) => (
                <button>{btn}</button>
              ))}
            </div>
          </div>
        </section>
      );
    case "Get in touch":
      return (
        <section className="intro footer-section">
          <header className="child">
            <h2>{data.title}</h2>
          </header>
          <div className="content">
            <p>
              <strong>{data.textStrong}</strong>
              {data.text}
            </p>
            <form>
              <div className="userInfo">
                <input type="text" name="name" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
              </div>
              <textarea placeholder="Message" cols={35} rows={10} />
              <button>send message</button>
            </form>
            <div className="copyright">
              &copy; Untitled. All rights reserved. Design:
              <a href="https://github.com/Hamed-Morady/paradigm-shift.git">{data.textLink}</a>
            </div>
          </div>
          <footer>
            <ul className="footer-item">
              <li>
                <h3>Email</h3>
                <a href="https://github.com/Hamed-Morady/paradigm-shift.git">{data.email}</a>
              </li>
              <li>
                <h3>Phone</h3>
                <a href="https://github.com/Hamed-Morady/paradigm-shift.git">{data.phone}</a>
              </li>
              <li>
                <h3>Address</h3>
                <span>{data.Address}</span>
              </li>
              <li className="father-icons">
                <h3>{data.elsewhere}</h3>
                <ul className="icons">
                  {data.elsewhereimage.map((img) => (
                    <a href="https://github.com/Hamed-Morady/paradigm-shift.git">
                      <img src={img} alt="image" />
                    </a>
                  ))}
                </ul>
              </li>
            </ul>
          </footer>
        </section>
      );
  }
}
