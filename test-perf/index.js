import http from "k6/http";

export let options = {
  vus: 100,
  duration: "30s"
};

export default function () {
  // http.get(`Call API here`)
};
