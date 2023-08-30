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
} from "@material-tailwind/react";
import { useForm, Controller, handleSubmit } from "react-hook-form";
import SmoothProgressBar from "./ProgressBar";

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

  const positions = [
    {
      label: "Software Developer",
      questions: [
        { type: "Input", label: "Your Name", name: "devName" },
        { type: "Input", label: "Email Address", name: "devEmail" },
        {
          type: "Textarea",
          label: "Why do you want to volunteer as a Developer?",
          name: "devWhyVolunteer",
        },
        {
          type: "Textarea",
          label: "Describe your experience with coding.",
          name: "devCodingExp",
        },
        {
          type: "Select",
          label: "Experience Level",
          name: "devExp",
          options: ["Junior", "Mid", "Senior", "Expert", "Ninja"],
        },
        { type: "Checkbox", label: "Familiar with Git", name: "devGit" },
        {
          type: "Checkbox",
          label: "Willing to attend virtual meetings",
          name: "devVirtualMeetings",
        },
      ],
    },
    {
      label: "Marketing Intern",
      questions: [
        { type: "Input", label: "Your Name", name: "mktgName" },
        { type: "Input", label: "Email Address", name: "mktgEmail" },
        {
          type: "Textarea",
          label: "Why do you want to volunteer as a Marketing Intern?",
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
          options: ["Junior", "Mid", "Senior", "Expert", "Ninja"],
        },
        {
          type: "Checkbox",
          label: "Familiar with Social Media Management",
          name: "mktgSocialMedia",
        },
        {
          type: "Checkbox",
          label: "Willing to attend virtual meetings",
          name: "mktgVirtualMeetings",
        },
      ],
    },
  ];

  const watchedFields = watch();

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

  const submitHandler = () => {
    const data = {
      ...watchedFields,
      position: currentTab,
    };
    console.log("onSubmit");
    console.log(data);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-deep-orange-50 via-deep-orange-100 to-deep-orange-100/30 backdrop-filter backdrop-blur-md">
      <div className="flex flex-col md:flex-row w-full h-full gap-4 p-8 md:p-16 md:mt-16 mt-16 md:mb-16 mb-60">
        <Card
          color="transparent"
          shadow={false}
          className="backdrop-blur-md w-full md:w-1/4 p-4 rounded-xl mb-8 md:mb-0"
        >
          <Typography
            variant="h4"
            className="text-gray-900 text-3xl font-bold font-dela-gothic mb-4"
          >
            Volunteer Benefits
          </Typography>
          <ul className="font-dm-sans">
            <li>Presidential Volunteer Service Award</li>
            <li>Free training and workshops</li>
            <li>Letters of recommendation</li>
            <li>Get volunteer hours</li>
            <li>Experience for your resume</li>
          </ul>
        </Card>
        <div className="flex flex-col w-full md:w-3/4 h-full backdrop-blur-md p-4 rounded-xl">
          <Tabs
            value={currentTab}
            orientation="vertical"
            className="w-full h-full"
          >
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
            <TabsBody className="w-full flex-auto">
              {positions.map(({ label, questions }) => (
                <TabPanel key={label} value={label} className="w-full h-full">
                  <form
                    onSubmit={handleSubmit(submitHandler)}
                    className="h-full flex flex-col space-y-4"
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
                                  className="font-dm-sans"
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
                                    <Typography
                                      color="white"
                                      className="flex items-center font-normal font-dm-sans"
                                    >
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
                                      setValue(question.name, selectedValue);
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
  );
}
