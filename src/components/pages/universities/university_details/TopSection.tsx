import FadeInLeftWithSlowBounce from "@/animation_wrappers/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/animation_wrappers/FadeInRightWithSlowBounce ";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { formatIndianNumber, getYearFromDate } from "@/lib/utils";
// import { University } from "@/types/university";
import { Button } from "@/components/ui/Button";
import { IoPlayCircle } from "react-icons/io5";
import { UniversityInfo } from "@/types/university";


const universityInfo : UniversityInfo = {
  name: "University of Delhi",
  image: "/images/universities/university-of-delhi.jpg",
  thumbnail: "/images/universities/university-of-delhi.jpg",
  short_info: {
    country: "India",
    university_type: "Public",
    total_students: 500000,
    launched: 1922
  },
  about_university: [
    {
      title: "About",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
    },
    {
      title: "Vision",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
    },
    {
      title: "Mission",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
    }
  ],
  programs: {
    undergraduate_programs: [
      {
        name: "Bachelor of Arts (B.A.)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
      },
      {
        name: "Bachelor of Commerce (B.Com.)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
      },
      {
        name: "Bachelor of Science (B.Sc.)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
      },
    ],
    postgraduate_programs: [],
    doctoral_programs: [],
  },
  scholarship: {
    short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    table: [],
    notes: []
  },
  application_guide: {
    short_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    guide_list: [],
    bottom_description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  admission: [
    {
      title: "Eligibility Criteria",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
    },
    {
      title: "Admission Process",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
    },
    {
      title: "Fee Structure",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
    },
    {
      title: "Scholarships",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, officia.",
    },
  ]
}
const TopSection = () => {
  // Thumbnail processing
  const getThumbnailSrc = (
    thumbnail: string | File | FileList | null | undefined,
  ): string => {
    if (!thumbnail) return ""; // Return empty string if thumbnail is null or undefined
    if (typeof thumbnail === "string") return thumbnail; // Return if it's already a string
    if (thumbnail instanceof File) return URL.createObjectURL(thumbnail); // Convert File to URL
    if (thumbnail instanceof FileList && thumbnail.length > 0)
      return URL.createObjectURL(thumbnail[0]); // Convert FileList to URL
    return ""; // Fallback
  };

  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-x-20 gap-y-10 rounded-xl border px-8 py-8 shadow-sm lg:flex-row">
          <FadeInLeftWithSlowBounce className="basis-full space-y-5 xl:basis-1/2">
            <h2 className="text-center text-4xl font-semibold lg:text-left">
              {universityInfo.about_university[0].title},{" "}
              {universityInfo.about_university[1].title}
            </h2>
            <p className="text-center text-sm font-medium lg:text-left">
              {universityInfo.programs.undergraduate_programs[0].name}
            </p>
            <div className="flex gap-x-4">
              <div className="space-y-2">
                <div className="flex items-center justify-start gap-x-2 text-sm font-medium">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 1.75C8.277 1.75 5.25 4.804 5.25 8.571C5.25 9.847 5.812 11.43 6.63 13.009C8.431 16.486 11.431 19.988 11.431 19.988C11.5014 20.07 11.5887 20.1358 11.6869 20.1809C11.7851 20.226 11.8919 20.2494 12 20.2494C12.1081 20.2494 12.2149 20.226 12.3131 20.1809C12.4113 20.1358 12.4986 20.07 12.569 19.988C12.569 19.988 15.569 16.486 17.37 13.009C18.188 11.43 18.75 9.847 18.75 8.571C18.75 4.804 15.723 1.75 12 1.75ZM12 5.75C11.2835 5.76932 10.6028 6.06753 10.1029 6.58115C9.60292 7.09477 9.32317 7.78323 9.32317 8.5C9.32317 9.21677 9.60292 9.90523 10.1029 10.4188C10.6028 10.9325 11.2835 11.2307 12 11.25C12.7165 11.2307 13.3972 10.9325 13.8971 10.4188C14.3971 9.90523 14.6768 9.21677 14.6768 8.5C14.6768 7.78323 14.3971 7.09477 13.8971 6.58115C13.3972 6.06753 12.7165 5.76932 12 5.75Z"
                      fill="#F37329"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.784 17.877C17.597 18.121 18.267 18.423 18.73 18.777C19.03 19.005 19.25 19.228 19.25 19.5C19.25 19.66 19.159 19.805 19.031 19.95C18.819 20.189 18.504 20.404 18.114 20.604C16.736 21.309 14.508 21.75 12 21.75C9.492 21.75 7.264 21.309 5.886 20.604C5.496 20.404 5.181 20.189 4.969 19.95C4.841 19.805 4.75 19.66 4.75 19.5C4.75 19.228 4.97 19.005 5.27 18.777C5.733 18.423 6.403 18.121 7.216 17.877C7.40656 17.8197 7.56655 17.6891 7.66079 17.5139C7.75503 17.3386 7.77579 17.1331 7.7185 16.9425C7.66121 16.752 7.53057 16.592 7.35532 16.4977C7.18007 16.4035 6.97456 16.3827 6.784 16.44C5.546 16.813 4.584 17.324 4.006 17.889C3.498 18.384 3.25 18.938 3.25 19.5C3.25 20.202 3.647 20.902 4.454 21.486C5.87 22.51 8.714 23.25 12 23.25C15.286 23.25 18.13 22.51 19.546 21.486C20.353 20.902 20.75 20.202 20.75 19.5C20.75 18.938 20.502 18.384 19.994 17.889C19.416 17.324 18.454 16.813 17.216 16.44C17.1216 16.4117 17.0226 16.4022 16.9246 16.4121C16.8266 16.422 16.7315 16.4511 16.6447 16.4977C16.5579 16.5444 16.4812 16.6077 16.4189 16.684C16.3565 16.7603 16.3099 16.8482 16.2815 16.9425C16.2531 17.0369 16.2436 17.1359 16.2535 17.2339C16.2634 17.332 16.2925 17.4271 16.3392 17.5139C16.3859 17.6006 16.4492 17.6774 16.5255 17.7397C16.6018 17.802 16.6896 17.8487 16.784 17.877Z"
                      fill="#F37329"
                    />
                  </svg>
                  <span>Country : {universityInfo.short_info.country}</span>
                </div>
                <div className="flex items-center justify-start gap-x-2 text-sm font-medium">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.68078 7.4938C3.44171 7.35786 3.44171 7.01567 3.67609 6.87974C4.25265 6.53755 5.50421 5.82036 6.09015 5.47817L13.0745 1.42349C13.4683 1.1938 13.9558 1.1938 14.3448 1.42349L23.7714 6.83286C24.0105 6.9688 24.0105 7.31099 23.7761 7.45161C23.1526 7.81255 20.4433 9.38755 19.8761 9.71568C19.8058 9.57974 19.6886 9.46255 19.562 9.37349L14.2464 6.27505C14.087 6.1813 13.9089 6.13442 13.7261 6.13442C12.6855 6.12974 12.2964 7.54536 13.2011 8.06567L17.9495 10.836V10.8407L14.3776 12.9172C13.9886 13.1422 13.4917 13.1469 13.1073 12.9172M16.7917 22.011C15.1276 25.1422 12.5355 23.6563 13.9651 20.6188C14.612 19.3579 15.6433 18.5938 16.5339 18.9735C17.312 19.3579 17.4292 20.7172 16.7917 22.011ZM15.0151 21.1344C14.6401 21.9126 15.3245 22.3063 15.7464 21.4954C16.1261 20.6751 15.4136 20.3516 15.0151 21.1344ZM14.7011 13.4797C14.1058 13.8266 13.3558 13.8266 12.7651 13.475L6.73702 10.0204C6.73702 10.4422 6.7464 13.0297 6.7464 13.386C9.46984 15.186 12.423 16.6954 15.4558 17.8766C16.0651 17.5251 17.3448 16.7844 17.9589 16.4235L17.9448 11.5954L14.7011 13.4797ZM20.0214 10.3907L20.0355 15.2188C20.298 15.0547 20.7573 14.8954 20.7339 14.511L20.7198 9.98286L20.0214 10.3907ZM18.6245 17.5719C18.8636 17.511 19.1448 17.511 19.3839 17.5719L19.3651 10.2313C19.3651 10.1 19.2901 9.9688 19.1776 9.90318L13.9183 6.83755C13.487 6.5938 13.1073 7.2313 13.5386 7.4938L18.6105 10.4516L18.6245 17.5719ZM19.0042 18.186C17.6823 18.2188 17.687 20.1547 19.0089 20.1876C20.3261 20.1407 20.3261 18.2282 19.0042 18.186ZM7.91827 14.8954C6.33859 13.9485 4.64171 12.7719 3.33859 11.75C2.46203 10.8829 1.1964 11.7219 0.455776 13.1422C-0.177037 14.436 -0.0645369 15.7907 0.718276 16.175C2.34953 16.7516 4.04171 17.4454 5.90734 18.3735C6.05734 17 6.79796 15.711 7.91827 14.8954ZM15.123 18.4485C13.787 17.9188 12.512 17.3657 11.087 16.6485C9.91515 17.4125 9.16984 18.7016 9.1089 20.1172C10.5292 20.9657 11.8042 21.8235 12.9339 22.6579C12.6808 21.2047 13.7964 19.0344 15.123 18.4485ZM10.4355 16.3157C9.80265 15.9875 9.15109 15.6266 8.53702 15.2704C7.36046 15.9501 6.53546 17.5766 6.54484 18.6969C7.19171 19.0297 7.86202 19.3954 8.48077 19.7516C8.51827 18.7391 9.31046 17.0563 10.4355 16.3157ZM5.87453 18.9688C5.28859 19.2219 4.57609 19.6438 4.1214 19.9813C4.77765 20.3469 5.68702 21.0688 6.18859 21.6219C6.57296 21.1485 7.2714 20.511 7.84327 20.1454C7.22921 19.7891 6.51671 19.4188 5.86984 19.0907L5.87453 18.9688Z"
                      fill="#F37329"
                    />
                  </svg>
                  <span>
                    University Type :{" "}
                    {universityInfo.short_info.university_type}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-start gap-x-2 text-sm font-medium">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5287 8.73438C18.5632 9.6663 19.9006 9.6656 19.9349 8.73438V5.83544L18.5287 6.34943V8.73438ZM4.53023 4.50691L11.7578 7.15043C11.9138 7.20746 12.0848 7.20749 12.2407 7.15052L19.4732 4.507C20.0849 4.28411 20.0847 3.40896 19.4732 3.18621L12.2432 0.542785C12.0873 0.485738 11.9162 0.485738 11.7603 0.542785L4.53033 3.18621C3.9187 3.40905 3.91894 4.28416 4.53023 4.50691ZM7.15678 15.8388C7.15678 14.5237 6.08686 13.4538 4.77178 13.4538C1.61208 13.5737 1.61297 18.1043 4.77183 18.2238C6.08686 18.2238 7.15678 17.1538 7.15678 15.8388ZM21.6168 15.8388C21.6168 14.5237 20.5469 13.4538 19.2318 13.4538C16.0721 13.5737 16.073 18.1043 19.2319 18.2238C20.5469 18.2238 21.6168 17.1538 21.6168 15.8388ZM9.61678 15.8388C9.61678 17.1538 10.6867 18.2238 12.0018 18.2238C15.1615 18.1038 15.1606 13.5732 12.0017 13.4538C10.6867 13.4538 9.61678 14.5237 9.61678 15.8388ZM19.2318 18.2238C18.2901 18.2238 17.4113 18.4981 16.6711 18.971C17.6068 20.0525 18.1732 21.4585 18.1732 22.9937V24.5H23.2987C23.687 24.5 24.0018 24.1852 24.0018 23.7969V22.9937C24.0018 20.3636 21.862 18.2238 19.2318 18.2238Z"
                      fill="#F37329"
                    />
                    <path
                      d="M11.96 18.2237C9.31045 18.2237 7.15486 20.3635 7.15486 22.9937V24.5H16.7652V22.9937C16.7652 20.3635 14.6096 18.2237 11.96 18.2237ZM4.77 18.2237C2.1398 18.2237 0 20.3635 0 22.9937V23.7968C0 24.1851 0.314812 24.5 0.703125 24.5H5.74861V22.9937C5.74861 21.4431 6.32639 20.0243 7.27889 18.9386C6.54956 18.4857 5.68983 18.2237 4.77 18.2237ZM16.4687 9.61667V7.10168L12.7217 8.47123C12.2575 8.64209 11.7364 8.64209 11.2725 8.47081L7.53127 7.10248V9.61742C7.53126 9.76153 7.57554 9.90216 7.65811 10.0203C7.74068 10.1384 7.85755 10.2283 7.99289 10.2777L11.7561 11.6541C11.912 11.7111 12.0831 11.7111 12.239 11.6541L16.007 10.2771C16.1423 10.2276 16.2592 10.1377 16.3418 10.0196C16.4244 9.90146 16.4687 9.76081 16.4687 9.61667Z"
                      fill="#F37329"
                    />
                  </svg>
                  <span>
                    Total Students :{" "}
                    {universityInfo.short_info.total_students
                      ? formatIndianNumber(
                          universityInfo.short_info.total_students,
                        )
                      : "N/A"}
                  </span>
                </div>
                <div className="flex items-center justify-start gap-x-2 text-sm font-medium">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8953 1.91174H18.7776V4.02939C18.7776 4.45292 18.4247 4.73527 18.0717 4.73527C17.7188 4.73527 17.3659 4.45292 17.3659 4.02939V1.91174H6.07174V4.02939C6.07174 4.45292 5.7188 4.73527 5.36585 4.73527C5.01291 4.73527 4.65997 4.45292 4.65997 4.02939V1.91174H2.54233C1.4835 1.91174 0.707031 2.82939 0.707031 4.02939V6.57057H23.2953V4.02939C23.2953 2.82939 22.0247 1.91174 20.8953 1.91174ZM0.707031 8.05292V20.9706C0.707031 22.2412 1.4835 23.0882 2.61291 23.0882H20.9659C22.0953 23.0882 23.3659 22.1706 23.3659 20.9706V8.05292H0.707031ZM6.98938 19.9117H5.29527C5.01291 19.9117 4.73056 19.7 4.73056 19.347V17.5823C4.73056 17.3 4.94233 17.0176 5.29527 17.0176H7.05997C7.34233 17.0176 7.62468 17.2294 7.62468 17.5823V19.347C7.55409 19.7 7.34233 19.9117 6.98938 19.9117ZM6.98938 13.5588H5.29527C5.01291 13.5588 4.73056 13.347 4.73056 12.9941V11.2294C4.73056 10.947 4.94233 10.6647 5.29527 10.6647H7.05997C7.34233 10.6647 7.62468 10.8764 7.62468 11.2294V12.9941C7.55409 13.347 7.34233 13.5588 6.98938 13.5588ZM12.6364 19.9117H10.8717C10.5894 19.9117 10.307 19.7 10.307 19.347V17.5823C10.307 17.3 10.5188 17.0176 10.8717 17.0176H12.6364C12.9188 17.0176 13.2011 17.2294 13.2011 17.5823V19.347C13.2011 19.7 12.9894 19.9117 12.6364 19.9117ZM12.6364 13.5588H10.8717C10.5894 13.5588 10.307 13.347 10.307 12.9941V11.2294C10.307 10.947 10.5188 10.6647 10.8717 10.6647H12.6364C12.9188 10.6647 13.2011 10.8764 13.2011 11.2294V12.9941C13.2011 13.347 12.9894 13.5588 12.6364 13.5588ZM18.2835 19.9117H16.5188C16.2364 19.9117 15.9541 19.7 15.9541 19.347V17.5823C15.9541 17.3 16.1659 17.0176 16.5188 17.0176H18.2835C18.5659 17.0176 18.8482 17.2294 18.8482 17.5823V19.347C18.8482 19.7 18.6364 19.9117 18.2835 19.9117ZM18.2835 13.5588H16.5188C16.2364 13.5588 15.9541 13.347 15.9541 12.9941V11.2294C15.9541 10.947 16.1659 10.6647 16.5188 10.6647H18.2835C18.5659 10.6647 18.8482 10.8764 18.8482 11.2294V12.9941C18.8482 13.347 18.6364 13.5588 18.2835 13.5588Z"
                      fill="#F37329"
                    />
                  </svg>
                  <span>
                    Launched :{" "}
                    {universityInfo.short_info?.launched
                      ? getYearFromDate(
                          universityInfo.short_info?.launched.toString(),
                        )
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-start">
              <Button
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 4.16865V12.8353M8 4.16865C7.22133 3.65131 6.164 3.33331 5 3.33331C3.836 3.33331 2.77867 3.65131 2 4.16865V12.8353C2.77867 12.318 3.836 12 5 12C6.164 12 7.22133 12.318 8 12.8353M8 4.16865C8.77867 3.65131 9.836 3.33331 11 3.33331C12.1647 3.33331 13.2213 3.65131 14 4.16865V12.8353C13.2213 12.318 12.1647 12 11 12C9.836 12 8.77867 12.318 8 12.8353"
                      stroke="#FDFDFD"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              >
                Admission now
              </Button>
            </div>
          </FadeInLeftWithSlowBounce>
          <FadeInRightWithSlowBounce className="relative min-h-[350px] w-full basis-full xl:basis-1/2">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <Image
                    className="cursor-pointer rounded-lg object-cover object-center xl:object-right"
                    src={getThumbnailSrc(universityInfo.photo)}
                    alt={universityInfo.name}
                    fill
                  />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white">
                    <IoPlayCircle className="text-7xl text-primary" />
                  </span>
                </div>
              </DialogTrigger>
              <DialogContent className="bg-white">
                <div className="grid gap-4 py-4">
                  <h1>here will be the video</h1>
                </div>
              </DialogContent>
            </Dialog>
          </FadeInRightWithSlowBounce>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
