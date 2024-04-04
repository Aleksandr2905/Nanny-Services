import { Controller, useForm } from "react-hook-form";
import { InputForm } from "../InputForm/InputForm";
import * as s from "./Appointment.styled";
import { appointmentSchema } from "../../helpers/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { SelectMeeting } from "../SelectMeeting/SelectMeeting";

export const Appointment = ({ onCloseModal, nannies }) => {
  const { name, avatar_url } = nannies;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(appointmentSchema),
  });

  const onSubmit = (data) => {
    const { parents, phone } = data;
    toast.success(
      `${parents.toUpperCase()}, you have made an appointment with the nanny, we will call you back at number ${phone} to clarify the information.`
    );
    reset();
    onCloseModal();
  };
  return (
    <s.Wrapper>
      <s.Title>Make an appointment {"\n"}with a babysitter</s.Title>
      <s.Text>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </s.Text>
      <s.NannyWrap>
        <s.Img src={avatar_url} alt={name} />
        <s.NameWrap>
          <s.Nanny>Your nanny</s.Nanny>
          <s.NameNanny>{name}</s.NameNanny>
        </s.NameWrap>
      </s.NannyWrap>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        <s.InputBlock>
          <InputForm
            name="address"
            type="text"
            placeholder="Address"
            register={register}
            errors={errors}
          />
          <InputForm
            name="phone"
            type="tel"
            placeholder="+380"
            register={register}
            errors={errors}
          />
        </s.InputBlock>
        <s.InputBlock>
          <InputForm
            name="age"
            type="text"
            placeholder="Child's age"
            register={register}
            errors={errors}
          />
          <Controller
            name="time"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <s.WrapperTextarea>
                <SelectMeeting {...field} $error={!!errors.meetingTime} />
                <s.ErrorText>{errors.time?.message}</s.ErrorText>
              </s.WrapperTextarea>
            )}
          />
        </s.InputBlock>
        <InputForm
          name="email"
          type="text"
          placeholder="Email"
          register={register}
          errors={errors}
        />
        <InputForm
          name="parents"
          type="text"
          placeholder="Father's or mother's name"
          register={register}
          errors={errors}
        />
        <s.WrapperTextarea>
          <s.Textarea
            $error={!!errors.comment}
            placeholder="Comment"
            {...register("comment")}
          ></s.Textarea>
          <s.ErrorText>{errors.comment?.message}</s.ErrorText>
        </s.WrapperTextarea>
        <s.Btn type="submit">Send</s.Btn>
      </s.Forma>
    </s.Wrapper>
  );
};
