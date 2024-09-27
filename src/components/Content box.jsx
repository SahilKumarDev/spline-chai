import PropTypes from "prop-types";

const Button = ({ href, label, className, target = "_self" }) => {
  return (
    <a href={href} target={target}>
      <button
        className={`font-medium rounded-lg text-sm px-5 py-2.5  sm:w-fit w-full ${className}`}
      >
        {label}
      </button>
    </a>
  );
};

// PropTypes for Button Component
Button.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
};

const ContentBox = () => {
  return (
    <section className="sm:h-screen my-auto flex items-center text-white">
      <div className="space-y-7 sm:space-y-4">
        {/* Header Section */}
        <div className="sm:flex sm:items-center sm:gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Welcome to my website
          </h1>
          <Button
            href="https://sahilkumardev.netlify.app"
            label="Sahil Kumar"
            className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800"
            target="_blank"
          />
        </div>

        {/* Description Section */}
        <h2 className="text-2xl merriweather-regular">
          Discover the art of code with{" "}
          <span className="text-[#FF9119] merriweather-medium">
            chai or code
          </span>{" "}
          that explains the reality behind the code with a detailed discussion
          with Hitesh sir on their channel, chai or code link below.
        </h2>

        {/* Button Links Section */}
        <div className="grid grid-cols-2 sm:flex gap-5">
          <Button
            href="https://www.youtube.com/@chaiaurcode"
            label="Chai or code"
            className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80"
            target="_blank"
          />
          <Button
            href="https://youtu.be/0IXQDsdCWpE?si=ZEW8t0QVoCNFT75E"
            label="Watch Video"
            className="text-white bg-purple-700 hover:bg-purple-800"
          />
        </div>
      </div>
    </section>
  );
};

export default ContentBox;
