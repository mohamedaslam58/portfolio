/* About & Resume content — Mohamed Aslam_Resume.pdf (Sep 2026) */

const RESUME_FILE = "assets/files/Mohamed Aslam_Resume.pdf";
const RESUME_DOWNLOAD_NAME = "Mohamed Aslam_Resume.pdf";

const ABOUT_PROFILE = {
  titleKey: "about_page_title",
  employerKey: "about_page_employer",
  orgKey: "about_page_org",
  summaryKey: "about_page_summary",
};

const ABOUT_META = [
  { labelKey: "clocation_key", valueKey: "clocation_val" },
  { labelKey: "experience_key", valueKey: "experience_val" },
  { labelKey: "about_meta_email", email: true },
  {
    labelKey: "about_meta_phone",
    valueKey: "about_meta_phone_val",
    href: "tel:+971563374166",
  },
  { labelKey: "passport_key", valueKey: "about_meta_passport_val" },
  { labelKey: "about_meta_relocate", valueKey: "about_meta_relocate_val" },
];

const ABOUT_LINKS = [
  {
    labelKey: "about_link_linkedin",
    href: "https://www.linkedin.com/in/mohamed-aslam-575199203/",
  },
  { labelKey: "about_link_github", href: "https://github.com/mohamedaslam58" },
  { labelKey: "about_link_portfolio", href: "https://www.mohamedaslam.site" },
  {
    labelKey: "about_link_youtube",
    href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod3MnaV_pPBsM2fLmJUQuGRa",
  },
  {
    labelKey: "download_cv",
    href: RESUME_FILE,
    download: RESUME_DOWNLOAD_NAME,
  },
];

/** Banner contact strip — icon + label + display text (from resume / profile) */
/** Hero employer highlight — logos only, not links */
const EMPLOYER_BRANDS = [
  { name: "Scientific Publishing Services Pvt. Ltd.", img: "assets/images/experience/sps.jpg" },
  { name: "Syncfusion Software Pvt. Ltd.", img: "assets/images/experience/syncfusion.png" },
  { name: "Gen2k Conglomerate", img: "assets/images/experience/gen2k.png" }
];

const HERO_SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    brand: "linkedin",
    href: "https://www.linkedin.com/in/mohamed-aslam-575199203/",
    icon: "fa-brands fa-linkedin-in",
    text: "linkedin.com/in/mohamed-aslam-575199203/",
  },
  {
    label: "GitHub",
    brand: "github",
    href: "https://github.com/mohamedaslam58",
    icon: "fa-brands fa-github",
    text: "github.com/mohamedaslam58",
  },
  {
    label: "YouTube",
    brand: "youtube",
    href: "https://www.youtube.com/playlist?list=PLiZdgZd6wod3MnaV_pPBsM2fLmJUQuGRa",
    icon: "fa-brands fa-youtube",
    text: "Software dev tutorials & demos",
  },
  {
    label: "Portfolio",
    brand: "portfolio",
    href: "https://www.mohamedaslam.site",
    icon: "fa-solid fa-globe",
    text: "www.mohamedaslam.site",
  },
  {
    label: "Email",
    brand: "email",
    href: "mailto:mohamedaslam58@gmail.com",
    icon: "fa-solid fa-envelope",
    text: "mohamedaslam58@gmail.com",
    email: true,
  },
  {
    label: "Phone",
    brand: "phone",
    href: "tel:+971563374166",
    icon: "fa-solid fa-phone",
    text: "+971-563374166",
  },
];

const SKILL_BARS = [
  { nameKey: "about_skill_1_name", yearsKey: "about_skill_1_years", level: 95 },
  { nameKey: "about_skill_2_name", yearsKey: "about_skill_2_years", level: 93 },
  { nameKey: "about_skill_3_name", yearsKey: "about_skill_3_years", level: 92 },
  { nameKey: "about_skill_4_name", yearsKey: "about_skill_4_years", level: 90 },
  { nameKey: "about_skill_5_name", yearsKey: "about_skill_5_years", level: 88 },
  { nameKey: "about_skill_6_name", yearsKey: "about_skill_6_years", level: 86 },
  { nameKey: "about_skill_7_name", yearsKey: "about_skill_7_years", level: 85 },
  { nameKey: "about_skill_8_name", yearsKey: "about_skill_8_years", level: 84 },
  { nameKey: "about_skill_9_name", yearsKey: "about_skill_9_years", level: 82 },
  { nameKey: "about_skill_10_name", yearsKey: "about_skill_10_years", level: 85 },
];

const PERSONAL_SKILL_KEYS = [
  "about_personal_1",
  "about_personal_2",
  "about_personal_3",
  "about_personal_4",
];

const ABOUT_CERTS = [
  {
    titleKey: "about_cert_1_title",
    issuerKey: "about_cert_1_issuer",
    whenKey: "about_cert_1_when",
  },
  {
    titleKey: "about_cert_2_title",
    issuerKey: "about_cert_2_issuer",
    whenKey: "about_cert_2_when",
  },
  {
    titleKey: "about_cert_3_title",
    issuerKey: "about_cert_3_issuer",
    whenKey: "about_cert_3_when",
  },
];

/** Resume page education — keys into assets/data/localization/{lang}.json */
const RESUME_EDUCATION = [
  {
    periodKey: "education_anna_university_period",
    degreeKey: "resume_edu_btech_degree",
    fieldKey: "resume_edu_btech_field",
    schoolKey: "resume_edu_btech_school",
    descKey: "education_anna_university_desc",
  },
];

/** Same roles as Experiences timeline — uses experience_{id}* locale keys */
const RESUME_JOB_IDS = ["sps", "syncfusion", "gen2k"];

const RESUME_ACHIEVEMENT_KEYS = [
  "resume_highlight_1",
  "resume_highlight_2",
  "resume_highlight_3",
];