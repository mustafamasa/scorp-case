import dynamic from "next/dynamic";
import { useEffect } from "react";
import { connect } from "react-redux";

const Select = dynamic(
  () => import("react-select").then((mod) => mod.default),
  { ssr: false, loading: () => null }
);

const CountrySelect = ({ t, selectedOption, setSelectedOption }) => {
  const countries = t("contact.countries") || [];

  const options = Object.keys(countries).map((country) => ({
    value: country,
    label: countries[country],
  }));

  useEffect(() => {
    const userLanguage = navigator.language || navigator.userLanguage;
    const defaultOptions = options.find(
      (option) => option.value === userLanguage
    );
    if (defaultOptions) setSelectedOption(defaultOptions);
  }, []);

  return (
    <Select
      options={options}
      onChange={setSelectedOption}
      defaultValue={selectedOption}
    />
  );
};

const mapState = ({ Locale }) => ({ t: (key) => Locale.useTranslation(key) });

export default connect(mapState)(CountrySelect);
