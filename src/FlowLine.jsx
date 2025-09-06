import React from "react";

const FlowLine = () => {
  // Data for numbers and labels
  const steps = [
    { value: 1034, label: "Visitors" },
    { value: 2, label: "Sign Ups" },
    { value: 54, label: "Active Users" },
    { value: 25, label: "Conversions" },
  ];

  return (
    <div className="w-full flex justify-center items-center p-10">
      <svg
        viewBox="0 0 200 1200"
        className="w-auto h-full max-h-[600px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical dashed line */}
        <line
          x1="100"
          y1="50"
          x2="100"
          y2="1150"
          stroke="#4f46e5"
          strokeWidth="4"
          strokeDasharray="12,12"
        />

        {/* Map numbers vertically */}
        {steps.map((step, index) => {
          const positions = [200, 450, 700, 950];
          const y = positions[index];

          return (
            <g key={index} transform={`translate(100, ${y})`}>
              {/* Big number */}
              <text
                textAnchor="middle"
                className="fill-indigo-600 font-bold"
                style={{ fontSize: "32px" }}
              >
                {step.value}
              </text>
              {/* Description */}
              <text
                textAnchor="middle"
                dy="28"
                className="fill-gray-600"
                style={{ fontSize: "16px" }}
              >
                {step.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default FlowLine;
