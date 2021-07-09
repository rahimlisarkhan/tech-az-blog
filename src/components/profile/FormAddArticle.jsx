import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Form, Field, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import "react-toastify/dist/ReactToastify.css";
import stores from "../../stores";




//VALIDATE MESSAGES
const OwnerAddProduct = Yup.object().shape({
  title: Yup.string()
    .min(3, "Çox qısadır!")
    // .max(30, "Too Long!")
    .required("Boş buraxıla bilməz"),
  description: Yup.string()
    .min(10, "Çox qısadır!")
    // .max(300, "Too Long!")
    .required("Boş buraxıla bilməz"),

//   category: Yup.string().required("Required"),

  price: Yup.string().required("Boş buraxıla bilmə"),

  main_image: Yup.string().required("Boş buraxıla bilmə"),

  amount_by_unit: Yup.string().required("Boş buraxıla bilməuired"),

  unit: Yup.string().required("Boş buraxıla bilmə"),
});

let FormAddArticle = (props) => {
  const [viewCategoryPanel, setCategoryPanelView] = useState(false);
  const [categoriesData, setCategoriesData] = useState(null)

  useEffect(() =>{ 
    setCategoriesData(props.categories)
  
    setCategoryPanelView(props.openLoginPage)
  },[props.categories,props.openLoginPage])


  return (
    <>
      <Formik
        initialValues={{
          title: "",
          description: "",
          category: null,
          price: "",
          discount_price: "",
          main_image: "",
          amount_by_unit: "",
          unit: "",
        }}
        validationSchema={OwnerAddProduct}
        onSubmit={(values,form) => {
          let data = new FormData();
          data.append("title", values.title);
          data.append("description", values.description);
          data.append("category", parseInt(values.category));
          data.append("price", values.price);
          data.append("discount_price", values.discount_price);
          data.append("main_image", values.main_image);
          data.append("amount_by_unit", values.amount_by_unit);
          data.append("unit", values.unit);

          // form.resetForm()
 
        // props.createAddProduct(data)
        // props.getOwnerProduct()
          
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <div className="form-owner-add-product">
              <h1>məqaləvi yarat</h1>

              <div className="form-product uploadsize">
                <h3>örtük şəkili yükləyin</h3>

                <div className="form-product__content uploadsize__img">
                  <div className="form-product__content__group">
                    <label htmlFor="main_image">
                      <FaCloudUploadAlt />
                      <p>
                        
                        <span>yüklə</span> / şəkil seçin.
                      </p>
                      <input
                        type="file"
                        id="main_image"
                        name="main_image"
                        onChange={(e) =>
                          formik.setFieldValue("main_image", e.target.files[0])
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-product-text ">
                <h3>
                  məqaləvizin məlumatların buraya doldurun
                </h3>

                <div className="form-product-text__content">
                  <div className="form-product-text__content__group">
                    <label htmlFor="title">başlıq</label>
                    <Field id="title" name="title" type="text" />
                    <p>
                      <ErrorMessage name="title" />
                    </p>
                  </div>
                  <div className="form-product-text__content__group">
                    <label htmlFor="category">
                      tag
                      <span  onClick={() => {setCategoryPanelView(!viewCategoryPanel)}}>
                              {!viewCategoryPanel ?<AiOutlinePlusCircle/> : <AiOutlineMinusCircle className='iconColor'/> }
                      </span>
              
                       
                        
                    </label>
                    <select multiple  name="category" onChange={formik.handleChange}>
                    <option  selected label='Tag seçin' disabled hidden/>
                      {stores.newsStore.tags &&
                        stores.newsStore.tags.map((tag,index) => (
                          <option defaultValue={tag.title} key={index}  label={tag.title}/>
                        ))}
                    </select>
                    <p>
                      <ErrorMessage name="category" />
                    </p>
                  </div>
                  <div className="form-product-text__content__group">
                    <label htmlFor="price">qısa məzmun</label>
                    <textarea
                      id="price"
                      name="price"
                      type="text"
                      placeholder=""
                    />
                    <p>
                      <ErrorMessage name="price" />
                    </p>
                  </div>
                  <div className="form-product-text__content__group">
                    <label htmlFor="discount_price">mezmun</label>
                    <textarea
                      id="discount_price"
                      name="discount_price"
                      type="number"
                    />
                    <p>
                        <ErrorMessage name="discount_price" />
                    </p>
                  </div>
              </div>
              </div>

              <div className="form-btn-group">
                <button type='button' onClick={() => props.setArticlePanel()}>Cancel</button>
                <button disabled={props.panelOpenClose}>Create Product</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>

    {!props.panelOpenClose && <div
        className={
          (viewCategoryPanel)
            ? "form-categories-add categoryPanelShow"
            : "form-categories-add "
        }
      >
        {/* <FormAddCategories createCategories={props.createCategories}
                           setCategoryPanelView={() => setCategoryPanelView(!viewCategoryPanel)}
                           getCategories={props.getCategories}
                          /> */}
      </div>  }


 
    </>
  );
};

export default FormAddArticle;