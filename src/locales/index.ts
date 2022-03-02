export type LocaleProps = {
  locale: {
    error: {
      404: string;
      500: string;
    };
    head: {
      title: string;
    };
    footer: {
      bugs_start: string;
      bugs_end: string;
      ideas_start: string;
      ideas_end: string;
    };
  };
};

export default LocaleProps;
