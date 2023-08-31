import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Input,
  Textarea,
  Checkbox,
  Select,
  Option,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanel,
  Alert,
  TabsProps,
} from "@material-tailwind/react";
import { useForm, Controller, handleSubmit, set } from "react-hook-form";
import SmoothProgressBar from "./ProgressBar";
import axios from "axios";
import { useDebounce } from "use-debounce"; // you might need to install use-debounce package

export default function JoinTeam() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { isValid },
  } = useForm({ mode: "onChange" });

  const [currentTab, setCurrentTab] = useState("Developer");
  const [progress, setProgress] = useState(0);
  const [lastSubmitted, setLastSubmitted] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [debouncedIsSubmitting] = useDebounce(isSubmitting, 5000);
  const [alertVisible, setAlertVisible] = useState(false);

  const positions = [
    {
<<<<<<< HEAD
      label: "Web Developer",
=======
      label: "Start a Branch",
      questions: [
        { type: "Input", label: "Full Name", name: "branchName" },
        { type: "Input", label: "Email Address", name: "branchEmail" },
        { type: "Input", label: "Discord username", name: "branchDiscord" },
        { type: "Input", label: "School", name: "branchSchool" },
        { type: "Input", label: "City", name: "branchCity" },
        {
          type: "Textarea",
          label: "Why do you want to start a branch?",
          name: "branchWhyStart",
        },
        {
          type: "Textarea",
          label: "What is your vision for the new branch?",
          name: "branchVision",
        },
        {
          type: "Checkbox",
          label: "Are you willing to dedicate at least 5 hours a week?",
          name: "branchTimeCommitment",
        },
      ],
    },
    {
      label: "Software Developer",
>>>>>>> 7f81fa8 (Co-authored-by: Rohan Ramakrishnan <14r14@users.noreply.github.com>)
      questions: [
        { type: "Input", label: "Full Name", name: "devName" },
        { type: "Input", label: "Email Address", name: "devEmail" },
        { type: "Input", label: "Discord username", name: "devDiscord" },
        {
          type: "Textarea",
          label: "Why do you want to volunteer as a Developer at Cal Commit?",
          name: "devWhyVolunteer",
        },
        {
          type: "Textarea",
          label: "Describe your experience with coding.",
          name: "devCodingExp",
        },
        {
          type: "Select",
          label: "Developing Experience",
          name: "devExp",
          options: ["Beginner", "Intermediate", "Advanced", "Expert", "Ninja"],
        },
        {
          type: "Checkbox",
          label: "Familiar with NodeJS OR ExpressJS",
          name: "devSkill",
        },
        { type: "Checkbox", label: "Familiar with MongoDB ", name: "devMongo" },
        { type: "Checkbox", label: "Familiar with ReactJS ", name: "devReact" },
        { type: "Checkbox", label: "Familiar with Git ", name: "devGit" },

        {
          type: "Checkbox",
          label: "Willing to attend virtual meetings weekly",
          name: "devVirtualMeetings",
        },
      ],
    },
    {
      label: "Marketing Intern",
      questions: [
        { type: "Input", label: "Full Name", name: "mktgName" },
        { type: "Input", label: "Email Address", name: "mktgEmail" },
        { type: "Input", label: "Discord username", name: "mktgDiscord" },

        {
          type: "Textarea",
          label:
            "Why do you want to volunteer as a Marketing Intern at Cal Commit?",
          name: "mktgWhyVolunteer",
        },
        {
          type: "Textarea",
          label: "Describe any previous marketing experience.",
          name: "mktgPrevExp",
        },
        {
          type: "Select",
          label: "Experience Level",
          name: "mktgExp",
          options: ["Junior", "Intermediate", "Senior", "Expert", "Ninja"],
        },
        {
          type: "Checkbox",
          label: "Familiar with Social Media Management",
          name: "mktgSocialMedia",
        },
        {
          type: "Checkbox",
          label: "Willing to attend virtual meetings weekly",
          name: "mktgVirtualMeetings",
        },
      ],
    },
    {
      label: "Graphic Designer",
      questions: [
        { type: "Input", label: "Full Name", name: "gdName" },
        { type: "Input", label: "Email Address", name: "gdEmail" },
        {
          type: "Textarea",
          label: "Why do you want to volunteer as a Graphic Designer?",
          name: "gdWhyVolunteer",
        },
        {
          type: "Textarea",
          label: "Describe your experience in Graphic Design.",
          name: "gdExp",
        },
        {
          type: "Select",
          label: "Experience Level",
          name: "gdLevel",
          options: ["Beginner", "Intermediate", "Advanced", "Expert"],
        },
        {
          type: "Checkbox",
          label: "Familiar with Canva",
          name: "gdAdobe",
        },
        {
          type: "Checkbox",
          label: "Willing to attend virtual meetings weekly",
          name: "gdVirtualMeetings",
        },
      ],
    },
    {
      label: "Web Designer",
      questions: [
        { type: "Input", label: "Full Name", name: "gdName" },
        { type: "Input", label: "Email Address", name: "gdEmail" },
        {
          type: "Textarea",
          label: "Why do you want to volunteer as a Web Designer?",
          name: "wdWhyVolunteer",
        },
        {
          type: "Textarea",
          label: "Describe your experience in Website Designs.",
          name: "wdExp",
        },
        {
          type: "Select",
          label: "Experience Level",
          name: "wdLevel",
          options: ["Beginner", "Intermediate", "Advanced", "Expert"],
        },
        {
          type: "Checkbox",
          label: "Familiar with Figma",
          name: "wdFigma",
        },
        {
          type: "Checkbox",
          label: "Willing to attend virtual meetings weekly",
          name: "wdVirtualMeetings",
        },
      ],
    },
  ];

  const watchedFields = watch();
  const clearForm = () => {
    const currentQuestions =
      positions.find((pos) => pos.label === currentTab)?.questions || [];
    currentQuestions.forEach((question) => {
      setValue(question.name, question.type === "Checkbox" ? false : "");
    });
  };
  const totalQuestions =
    positions.find((pos) => pos.label === currentTab)?.questions.length || 0;

  useEffect(() => {
    const currentQuestions =
      positions.find((pos) => pos.label === currentTab)?.questions || [];

    const filledFields = currentQuestions.filter(
      (q) => watchedFields[q.name]
    ).length;
    setProgress((filledFields / currentQuestions.length) * 100);
  }, [watchedFields, currentTab, positions]);
  const [disableSubmit, setDisableSubmit] = useState(false);

  const submitHandler = async () => {
    if (disableSubmit) {
      console.log("Please wait before submitting again");
      return;
    }
    setDisableSubmit(true);
    const currentPos = positions.find((pos) => pos.label === currentTab);
    const currentQuestions = currentPos?.questions.map((q) => q.name) || [];
    const nameToLabelMap =
      currentPos?.questions.reduce((map, q) => {
        map[q.name] = q.label;
        return map;
      }, {}) || {};

    const filteredData = Object.keys(watchedFields)
      .filter((key) => currentQuestions.includes(key))
      .reduce((obj, key) => {
        obj[key] = watchedFields[key];
        return obj;
      }, {});

    const data = {
      ...filteredData,
      position: currentTab,
    };

    console.log("onSubmit");
    console.log(data);

    const discordEmbed = {
      embeds: [
        {
          title: "New Application",
          description: `New ${currentTab} Application`,
          fields: Object.keys(filteredData).map((key) => {
            return {
              name: nameToLabelMap[key] || key,
              value: filteredData[key].toString(),
            };
          }),
        },
      ],
    };

    try {
      await axios.post(
        "https://discord.com/api/webhooks/1146312198482837524/W9jElWb1Z8bDGNRth2yNHyBGCd0heDKCCs8X1HGe3cQEq0Fi7POIvMAhb8JAmhsFFlp_      ",
        discordEmbed
      );
      console.log("Successfully sent to Discord");
      setAlertVisible(true);
      setTimeout(() => setDisableSubmit(false), 5000);
    } catch (error) {
      console.error("Failed to send to Discord", error);
    }
    setLastSubmitted(new Date());
    setIsSubmitting(false);
  };
  const allFieldsFilled = positions
    .find((pos) => pos.label === currentTab)
    ?.questions.every((q) => watchedFields[q.name]);

  return (
    <div className="w-screen min-h-screen flex flex-col backdrop-filter backdrop-blur-md">
      <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100 backdrop-filter backdrop-blur-md">
        {alertVisible && (
          <Alert
            className="absolute bottom-4 right-4 w-3/4 md:w-1/4 z-50"
            onClose={() => setAlertVisible(false)}
          >
            Successfully submitted! Thank you for applying.
          </Alert>
        )}
        <div className="flex flex-col md:flex-row w-full h-full gap-4 p-8 md:p-16 md:mt-16 mt-16 md:mb-16 mb-60">
          <Card
            color="transparent"
            shadow={false}
            className="w-full md:w-1/4 p-4 rounded-xl"
          >
            <Typography
              variant="h4"
              className="font-bold font-dela-gothic text-gray-900 text-3xl  mb-4"
            >
              Volunteer Benefits
            </Typography>
            <ul className="list-inside font-dm-sans">
              <li>Presidential Volunteer Service Award</li>
              <li>Letters of recommendation</li>
              <li>Get volunteer hours</li>
              <li>Experience for your resume</li>
            </ul>
          </Card>
          <div className="flex flex-col w-full md:w-3/4 h-full backdrop-blur-md p-4 rounded-xl">
            <div className="mb-4">
              <Typography
                variant="h4"
                className="text-gray-900 text-3xl font-bold font-dela-gothic"
              >
                Applications
              </Typography>
            </div>

            <div className="hidden lg:flex">
              <Tabs
                value={currentTab}
                orientation="vertical"
                className="w-full h-full"
                TabsProps={{ defaultValue: 0 }}
                id="custom-animation"
              >
                {" "}
                {/* Desktop */}
                <TabsHeader className="w-full flex-none flex flex-col text-lg">
                  {positions.map(({ label }) => (
                    <Tab
                      key={label}
                      value={label}
                      onClick={() => setCurrentTab(label)}
                      className="w-full font-dm-sans py-2"
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <div className="w-full flex-auto">
                  <Button
                    variant="text"
                    onClick={clearForm}
                    className="text-sm text-gray-500 self-end"
                  >
                    Clear Form
                  </Button>
                  <TabsBody
                    animate={{
                      initial: {x: 250 },
                      mount: { x: 0 },
                      unmount: { x: 250 },
                    }}
                    className="w-full flex-auto"
                  >
                    {positions.map(({ label, questions }) => (
                      <TabPanel
                        key={label}
                        value={label}
                        className="w-full h-full"
                      >
                        <form
                          onSubmit={handleSubmit(submitHandler)}
                          className="shadow-lg h-full flex flex-col space-y-4 bg-white p-4 rounded-lg"
                        >
                          {questions.map((question, index) => {
                            switch (question.type) {
                              case "Input":
                                return (
                                  <Controller
                                    key={index}
                                    name={question.name}
                                    control={control}
                                    defaultValue=""
                                    //rules={{ required: true }}
                                    render={({ field }) => (
                                      <Input
                                        {...field}
                                        label={question.label}
                                        labelProps={{
                                          className: "font-dm-sans",
                                        }}
                                        className="font-dm-sans border border-black outline-black shadow-lg shadow-gray-900/5"
                                      />
                                    )}
                                  />
                                );
                              case "Textarea":
                                return (
                                  <Controller
                                    key={index}
                                    name={question.name}
                                    control={control}
                                    defaultValue=""
                                    //rules={{ required: true }}
                                    render={({ field }) => (
                                      <Textarea
                                        {...field}
                                        label={question.label}
                                        labelProps={{
                                          className: "font-dm-sans",
                                        }}
                                        className="font-dm-sans shadow-sm shadow-lg shadow-gray-900/5"
                                      />
                                    )}
                                  />
                                );
                              case "Checkbox":
                                return (
                                  <Controller
                                    key={index}
                                    name={question.name}
                                    control={control}
                                    defaultValue={false}
                                    render={({ field }) => (
                                      <Checkbox
                                        label={
                                          <Typography className="font-dm-sans font-normal">
                                            {question.label}
                                          </Typography>
                                        }
                                        {...field}
                                        className="font-dm-sans shadow-lg shadow-gray-900/5"
                                      />
                                    )}
                                  />
                                );
                              case "Select":
                                return (
                                  <Controller
                                    key={index}
                                    name={question.name}
                                    control={control}
                                    render={({
                                      field: { onChange, value, ...field },
                                    }) => {
                                      return (
                                        <Select
                                          label={question.label}
                                          labelProps={{
                                            className: "font-dm-sans",
                                          }}
                                          value={value}
                                          onChange={(selectedValue) => {
                                            onChange(selectedValue);
                                            setValue(
                                              question.name,
                                              selectedValue
                                            );
                                          }}
                                          {...field}
                                          className="font-dm-sans shadow-lg shadow-gray-900/5"
                                        >
                                          {question.options.map((option, i) => (
                                            <Option
                                              key={i}
                                              value={option}
                                              className="font-dm-sans"
                                            >
                                              {option}
                                            </Option>
                                          ))}
                                        </Select>
                                      );
                                    }}
                                  />
                                );
                              default:
                                return null;
                            }
                          })}
                          <SmoothProgressBar
                            value={progress}
                            className="mt-4 flex-none"
                          />

                          <Button
                            type="submit"
                            className="mt-4 flex-none font-dm-sans capitalize text-lg py-2 disabled:bg-gray-500 disabled:cursor-not-allowed disabled:text-black"
                            disabled={disableSubmit || !allFieldsFilled}
                          >
                            Apply
                          </Button>
                        </form>
                      </TabPanel>
                    ))}
                  </TabsBody>
                </div>
              </Tabs>
            </div>
            <div className="lg:hidden">
              {" "}
              {/* Mobile */}
              <Tabs
                value={currentTab}
                orientation="horizontal"
                className="w-full h-full"
                TabsProps={{ defaultIndex: 0 }}
              >
                <TabsHeader className="w-full flex-none flex flex-row text-md overflow-x-auto ">
                  {positions.map(({ label }) => (
                    <Tab
                      key={label}
                      value={label}
                      onClick={() => setCurrentTab(label)}
                      className="w-1/2 text-center font-dm-sans py-1 text-md"
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody className="w-full flex-auto">
                  {positions.map(({ label, questions }) => (
                    <TabPanel
                      key={label}
                      value={label}
                      className="w-full h-full"
                      orientation="horizontal"
                    >
                      <form
                        onSubmit={handleSubmit(submitHandler)}
                        className="h-full flex flex-col space-y-4"
                      >
                        <Button
                          variant="text"
                          onClick={clearForm}
                          className="text-sm text-gray-500 self-end"
                        >
                          Clear Form
                        </Button>
                        {questions.map((question, index) => {
                          switch (question.type) {
                            case "Input":
                              return (
                                <Controller
                                  key={index}
                                  name={question.name}
                                  control={control}
                                  defaultValue=""
                                  //rules={{ required: true }}
                                  render={({ field }) => (
                                    <Input
                                      variant="standard"
                                      {...field}
                                      label={question.label}
                                      className=" font-dm-sans"
                                    />
                                  )}
                                />
                              );
                            case "Textarea":
                              return (
                                <Controller
                                  key={index}
                                  name={question.name}
                                  control={control}
                                  defaultValue=""
                                  //rules={{ required: true }}
                                  render={({ field }) => (
                                    <Textarea
                                      {...field}
                                      label={question.label}
                                      className="font-dm-sans"
                                    />
                                  )}
                                />
                              );
                            case "Checkbox":
                              return (
                                <Controller
                                  key={index}
                                  name={question.name}
                                  control={control}
                                  defaultValue={false}
                                  render={({ field }) => (
                                    <Checkbox
                                      label={
                                        <Typography className="font-dm-sans font-semibold">
                                          {question.label}
                                        </Typography>
                                      }
                                      {...field}
                                    />
                                  )}
                                />
                              );
                            case "Select":
                              return (
                                <Controller
                                  key={index}
                                  name={question.name}
                                  control={control}
                                  render={({
                                    field: { onChange, value, ...field },
                                  }) => {
                                    return (
                                      <Select
                                        label={question.label}
                                        value={value}
                                        onChange={(selectedValue) => {
                                          onChange(selectedValue);
                                          setValue(
                                            question.name,
                                            selectedValue
                                          );
                                        }}
                                        {...field}
                                      >
                                        {question.options.map((option, i) => (
                                          <Option key={i} value={option}>
                                            {option}
                                          </Option>
                                        ))}
                                      </Select>
                                    );
                                  }}
                                />
                              );
                            default:
                              return null;
                          }
                        })}
                        <SmoothProgressBar
                          value={progress}
                          className="mt-4 flex-none"
                        />

                        <Button
                          type="submit"
                          className="mt-4 flex-none font-dm-sans"
                          disabled={disableSubmit || !allFieldsFilled}
                        >
                          Apply
                        </Button>
                      </form>
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
