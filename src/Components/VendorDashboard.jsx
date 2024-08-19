import { useState } from "react";
import { Box, Paper, Typography, IconButton, Grid } from "@mui/material";
import FilterIcon from "@mui/icons-material/Filter";
import InfoIcon from "@mui/icons-material/Info";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FolderCopyTwoToneIcon from "@mui/icons-material/FolderCopyTwoTone";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import BookingsCharts from "./ApexCharts";
import { CurrencyRupee } from "@mui/icons-material";
import VendorQA from "./VendorQA";
import Calendar from "./Calendar";

function MembershipPlans() {
  return (
    <div>
      <div className="bg-gray-300 font-sans lg:bg-transparent flex flex-col lg:flex-row absolute justify-center lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 px-5 xl:px-0 py-8 lg:py-0 w-full gap-6 items-center lg:items-stretch lg:ml-40 lg:mt-10 lg:pt-8">
        {PRICING_DATA.map((data, index) => (
          <div key={index} className="relative">
            <div className="max-w-sm xl:w-[370px] p-6 bg-white group h-full rounded-2xl lg:hover:-translate-y-6 ease-in duration-300 hover:bg-[#0B0641] hover:text-white border xl:border-none border-[#0B0641] rounded-lg shadow-lg">
              <div className="flex flex-row gap-5 items-center">
                {/* <div>{data.iconComponent}</div> */}
                <span className="text-3xl font-bold">{data.name}</span>
              </div>
              <span className="flex mt-4 text-[#A9A9AA] text-1xl">
                What You&apos;ll Get
              </span>
              {data.benefits.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2.5 items-start mt-6 text-left text-lg"
                >
                  <div className="pt-1 shrink-0">
                    <RightIcon />
                  </div>
                  <span>{data}</span>
                </div>
              ))}
              <div className="border border-dashed border-[#A9A9AA] tracking-widest my-4" />
              <div className="h-36">
                <div className="bottom-6 left-6 right-6 absolute">
                  <div className="flex justify-start items-baseline">
                    <span className="text-[28px] font-bold ">
                      <CurrencyRupee />
                      {data.price}
                    </span>
                  </div>
                  <button className="w-full px-4 py-3 bg-[#FFF5FA] text-[#FF1D89] group-hover:text-white group-hover:bg-[#FF1D89] rounded-xl mt-6 font-semibold text-xl">
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const RightIcon = () => {
  return (
    <svg
      className="fill-current"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.0001 0.00012207C4.48608 0.00012207 7.62939e-05 4.48612 7.62939e-05 10.0001C7.62939e-05 15.5141 4.48608 20.0001 10.0001 20.0001C15.5141 20.0001 20.0001 15.5141 20.0001 10.0001C20.0001 4.48612 15.5141 0.00012207 10.0001 0.00012207ZM8.00108 14.4131L4.28808 10.7081L5.70008 9.29212L7.99908 11.5871L13.2931 6.29312L14.7071 7.70712L8.00108 14.4131Z" />
    </svg>
  );
};

const PRICING_DATA = [
  {
    name: "Basic Vendor",
    price: "200",
    benefits: [
      "List up to 5 services.",
      "Basic profile customization.",
      "Standard analytics.",
      "Email support during business hours.",
    ],
  },
  {
    name: "Pro Vendor",
    price: "450",
    benefits: [
      "List up to 20 services.",
      "Advanced profile customization and profile suppor",
      "Enhanced analytics and reporting.",
      "Featured listing placement.",
    ],
  },
  {
    name: "Premium Vendor",
    price: "600",
    benefits: [
      "Unlimited service listings.",
      "Advanced analytics with monthly reports.",
      "24/7 priority support.",
      "Top placement in search results.",
    ],
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function VendorPortfolio() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Grid item xs={12}>
      <Paper elevation={3} sx={{ padding: 3, marginTop: 2 }}>
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <IconButton>
              <Link to="/vendor/project">
                <ArrowBackIcon />
              </Link>
            </IconButton>
            <Typography variant="h5" sx={{ ml: 2, fontWeight: "bold" }}>
              Portfolio
            </Typography>
          </div>

          <div className="p-4">
            <div className="flex items-start mb-6">
              <Checkbox
                {...label}
                checked={isChecked}
                onChange={handleCheckboxChange}
                sx={{ mr: 3 }}
              />
              <Typography
                sx={{
                  transition: "color 0.3s",
                  color: isChecked ? "pink" : "black",
                }}
              >
                I certify that the work uploaded is my own / is the copyright of
                our firm. I understand that any work found to be someone else's
                would be removed immediately, and action could be taken.
              </Typography>
            </div>

            <div className="flex flex-col items-center">
              <Box
                className="relative w-full h-80 bg-cover bg-center rounded-lg overflow-hidden"
                sx={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMOG68KYf8GpxsYHvHnV8bYv7pn7dqr4crA&s)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 text-center text-white p-4">
                  <AddCircleOutlineIcon sx={{ fontSize: 40 }} />
                  <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold" }}>
                    Add an Image
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Showcase your latest work here.
                  </Typography>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

function VendorProject() {
  return (
    <Grid item sx={{ width: "100%" }}>
      <div className="bg-white shadow-lg rounded-lg flex flex-col relative my-10">
        <div className="p-4 relative z-10">
          <Typography variant="h4" component="h1">
            Projects
          </Typography>
          <div className="mt-4 flex justify-start">
            <Link to="/vendor/portfolio" style={{ textDecoration: "none" }}>
              <div
                className="relative w-80 h-64 bg-cover bg-center rounded-lg overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrMOG68KYf8GpxsYHvHnV8bYv7pn7dqr4crA&s)",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                  <FolderCopyTwoToneIcon
                    sx={{ fontSize: 60, color: "white" }}
                  />
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{ color: "white", mt: 2 }}
                  >
                    Portfolio
                  </Typography>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Grid>
  );
}

function VendorInformation() {
  const [wishCount, setWishCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  return (
    <div className="w-11/12 mx-auto">
      <div className="bg-white shadow-md p-12">
        <h2 className="text-4xl font-semibold mb-8">Profile Analytics</h2>
        <div className="flex flex-col lg:flex-row justify-around mb-5 gap-4">
          <div className="border-2 border-pink-500 p-4 rounded-md flex-1 bg-pink-600 hover:bg-white">
            <h6 className="text-center font-bold text-xl">{wishCount}</h6>
            <p className="text-center">WishList Count</p>
          </div>
          <div className="border-2 border-pink-500 p-4 rounded-md flex-1 bg-pink-600 hover:bg-white">
            <h6 className="text-center font-bold text-xl">{pageCount}</h6>
            <p className="text-center">Page Views</p>
          </div>
        </div>
        <div className="bg-white shadow-md py-12">
          <h2 className="text-4xl font-semibold mb-4">Personal Information</h2>
          <form>
            <div className="grid grid-cols-12 gap-4">
              {[
                { label: "Login Email Id", type: "email", required: true },
                { label: "Brand Name", type: "text", required: true },
                { label: "Contact Person Name", type: "text" },
                { label: "Additional Email ID", type: "email" },
                { label: "Contact number", type: "text", required: true },
                { label: "Website Link", type: "text" },
                { label: "Google Business Link", type: "text" },
                { label: "City", type: "text", required: true },
              ].map(({ label, type, required }, index) => (
                <div
                  key={index}
                  className="col-span-12 md:col-span-9 flex items-center"
                >
                  <label className="w-36 mr-8">{label}</label>
                  <input
                    type={type}
                    className="form-input mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required={required}
                  />
                </div>
              ))}
              <div className="col-span-12 md:col-span-9 flex items-center">
                <label className="w-36 mr-8">Address</label>
                <div className="flex-col items-center">
                  <AddCircleOutlineIcon />
                  <p className="text-sm">Add a Location</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <VendorQA /> */}
    </div>
  );
}

function VendorAnalytics() {
  return (
    <Grid item sx={{ width: "100%" }}>
      <Paper elevation={3}>
        <Box sx={{ p: 10 }}>
          <BookingsCharts />
        </Box>
      </Paper>
    </Grid>
  );
}

export default function VendorProfile() {
  const location = useLocation();

  const tabItems = [
    { path: "information", icon: <InfoIcon />, label: "Information" },
    { path: "membership", icon: <CardMembershipIcon />, label: "Membership" },
    { path: "review", icon: <ReviewsIcon />, label: "Review" },
    { path: "graph", icon: <AutoGraphIcon />, label: "Analytics" },
    { path: "project", icon: <FilterIcon />, label: "Projects" },
  ];

  return (
    <Grid container spacing={0} sx={{ marginTop: 10, display: "flex" }}>
      <Grid item sx={{ width: "350px" }}>
        <Paper
          elevation={3}
          sx={{ height: "300px", padding: 2, margin: 2, width: "300px" }}
        >
          {tabItems.map((tab, index) => (
            <Link
              key={index}
              to={`/vendor/${tab.path}`}
              style={{
                textDecoration: "none",
                display: "block",
                marginBottom: 8,
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  backgroundColor:
                    location.pathname === `/vendor/${tab.path}`
                      ? "#ec407a"
                      : "inherit",
                  color:
                    location.pathname === `/vendor/${tab.path}`
                      ? "white"
                      : "black",
                  padding: 1,
                  borderRadius: 1,
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "#ec407a",
                    color: "white",
                  },
                }}
              >
                {tab.icon}
                <Typography
                  variant="body2"
                  sx={{
                    ml: 2,
                    fontWeight: "medium",
                    color:
                      location.pathname === `/vendor/${tab.path}`
                        ? "white"
                        : "black",
                  }}
                >
                  {tab.label}
                </Typography>
              </Box>
            </Link>
          ))}
        </Paper>
        <Calendar />
      </Grid>
      <Grid item xs={8} sx={{ ml: 5 }}>
        <Routes>
          <Route path="information" element={<VendorInformation />} />
          <Route path="membership" element={<MembershipPlans />} />
          <Route path="review" element={<VendorProject />} />
          <Route path="graph" element={<VendorAnalytics />} />
          <Route path="portfolio" element={<VendorPortfolio />} />
          <Route path="project" element={<VendorProject />} />
        </Routes>
      </Grid>
    </Grid>
  );
}
