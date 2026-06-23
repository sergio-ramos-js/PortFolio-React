import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        {t("contactme")}
        <span>{t("me")}!</span>
      </h2>
      <form action="https://formsubmit.co/oigresrol20@gmail.com" method="POST">
        <div className="input-box">
          <input id="full-name" name="name" type="text" autoComplete="name" placeholder={t("fullname")}/>
          <input name="email" type="email" autoComplete="email" placeholder={t("email")} />
        </div>
        <div className="input-box">
          <input name="phone" type="number" autoComplete="tel" placeholder={t("mobilenumber")} />
          <input name="subject" type="text" placeholder={t("emailsubject")} />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder={t("message")}
        ></textarea>
        <input type="submit" value={t("sendmessage")} className="btn" />
      </form>
    </section>
  );
}

export default Contact;
