import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SiparisFormu = () => {
  const initialValues = {
    pizzaIsmi: "",
    fiyat: "",
    boyut: "",
    hamur: "",
    malzemeler: [],
  };

  const boyutlar = [
    { id: 1, boyut: "Küçük" },
    { id: 2, boyut: "Orta" },
    { id: 3, boyut: "Büyük" },
  ];

  const hamurTipleri = [
    { id: 1, hamur: "İnce Kenar" },
    { id: 2, hamur: "Kalın Kenar" },
    { id: 3, hamur: "Çıtır Kenar" },
  ];

  const malzemeSecenekleri = [
    { id: 1, malzeme: "Mantar" },
    { id: 2, malzeme: "Sosis" },
    { id: 3, malzeme: "Salam" },
    { id: 4, malzeme: "Zeytin" },
    { id: 5, malzeme: "Sucuk" },
  ];

  const validationSchema = Yup.object().shape({
    pizzaIsmi: Yup.string().required("Pizza ismi zorunlu bir alandır."),
    fiyat: Yup.number()
      .min(0, "Fiyat sıfırdan büyük olmalıdır.")
      .required("Fiyat zorunlu bir alandır."),
    boyut: Yup.string().required("Pizza boyutu zorunlu bir alandır."),
    hamur: Yup.string().required("Hamur kalınlığı zorunlu bir alandır."),
    malzemeler: Yup.array()
      .of(Yup.string())
      .min(1, "En az bir malzeme seçmelisiniz.")
      .required("Malzemeler zorunlu bir alandır."),
  });

  const onSubmit = (values, { resetForm }) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <div>
      <h1>Sipariş Formu</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="pizzaIsmi">Pizza İsmi</label>
            <Field type="text" name="pizzaIsmi" />
            <ErrorMessage name="pizzaIsmi" />
          </div>

          <div>
            <label htmlFor="fiyat">Fiyat</label>
            <Field type="number" name="fiyat" />
            <ErrorMessage name="fiyat" />
          </div>

          <div>
            <label htmlFor="boyut">Pizza Boyutu</label>
            <Field as="select" name="boyut">
              <option value="">-- Boyut Seçin --</option>
              {boyutlar.map(({ id, boyut }) => (
                <option key={id} value={boyut}>
                  {boyut}
                </option>
              ))}
            </Field>
            <ErrorMessage name="boyut"/>
            </div>
            <div>
            <label htmlFor="hamur">Hamur Kalınlığı</label>
            <Field as="select" name="hamur">
              <option value="">-- Hamur Seçin --</option>
              {hamurTipleri.map(({ id, hamur }) => (
                <option key={id} value={hamur}>
                  {hamur}
                </option>
              ))}
            </Field>
            <ErrorMessage name="hamur" />
          </div>

          <div>
            <label>Malzemeler</label>
            <div>
              {malzemeSecenekleri.map(({ id, malzeme }) => (
                <label key={id}>
                  <Field type="checkbox" name="malzemeler" value={malzeme} />
                  {malzeme}
                </label>
              ))}
            </div>
            <ErrorMessage name="malzemeler" />
          </div>

          <button type="submit">Siparişi Onayla</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SiparisFormu;


