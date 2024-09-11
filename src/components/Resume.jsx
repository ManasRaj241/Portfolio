import React from "react";
import pdf from "../../public/resumePDF.pdf";
import resumeImage from "../../public/resumeIMG.jpg";

const Resume = () => {
  const pdfUrl = pdf;
  const pdfPreviewImage = resumeImage;

  return (
    <div name="Resume" className="max-w-screen-2xl mx-auto px-4 md:px-20 py-10">
      <h1 className="text-4xl font-bold text-center text-green-500 mb-10">
        Resume
      </h1>

      <div className="flex flex-col items-center p-5 mt-5">
        <div className="relative w-full max-w-2xl p-5 bg-gradient-to-tr from-gray-100 to-gray-200 rounded-3xl shadow-lg overflow-visible">
          <div className="absolute -inset-1 border-2 border-dashed border-gray-300 rounded-3xl pointer-events-none animate-pulse"></div>

          <div
            className="absolute
            opacity-20 blur-xl rounded-full pointer-events-none transform -rotate-45 transition duration-500"
          ></div>

          <div className="relative w-full overflow-visible">
            <img
              src={pdfPreviewImage}
              alt="PDF Preview"
              className="w-full h-auto border-2 border-gray-300 rounded-3xl 
              transition duration-500 hover:shadow-2xl hover:scale-105"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>

        <a
          href={pdfUrl}
          download="Resume.pdf"
          className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold text-lg 
          rounded-full hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default Resume;
