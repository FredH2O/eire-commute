export type LuasData = {
  stopInfo: {
    "@_created": string;
    "@_stop": string;
    "@_stopAbv": string;
    message: string;
    direction: {
      "@_name": string;
      tram: {
        "@_dueMins": string;
        "@_destination": string;
      }[];
    }[];
  };
};
