// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { useForm } from "react-hook-form";
// import { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import { useToast } from "../../context/ToastContext";

// export const LogInForm = () => {
//   const form = useForm();
//   const { login } = useAuth();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = form;
//   const { showToast } = useToast();

//   const onSubmit = async (data) => {
//     try {
//       const response = await login(data.uniID, data.password);

//       if (response.success) {
//         showToast("Logged in successfully", "Welcome back!", "success");
//       } else {
//         if (response.status === 401) {
//           showToast("Invalid credentials", "Please try again", "danger");
//         } else {
//           showToast("An error occurred", "Please try again later", "danger");
//         }
//       }
//     } catch (error) {
//       console.error(error);
//       showToast("An error occurred", "Please try again later", "danger");
//     }
//   };

//   return (
//     <div>
//       <Container className="d-flex justify-content-center align-items-center mt-3">
//         <Row>
//           <Col xs={12} md={12} lg={12}>
//             <div>
//               <h1 className="text-center mb-4" style={{ fontSize: "4rem" }}>
//                 Log In
//               </h1>

//               <Form onSubmit={handleSubmit(onSubmit)}>
//                 {/* University ID */}
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="University ID"
//                     className="rounded-5"
//                     {...register("uniID", {
//                       required: "ID is required",
//                       maxLength: 20,
//                     })}
//                   />
//                   <Form.Text className="text-danger">
//                     {errors.uniID?.message}
//                   </Form.Text>
//                 </Form.Group>

//                 {/* Password */}
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="password"
//                     placeholder="Password"
//                     className="rounded-5"
//                     {...register("password", {
//                       required: "Password is required",
//                       minLength: {
//                         value: 8,
//                         message: "Minimum Length 8 characters",
//                       },
//                     })}
//                   />
//                   <Form.Text className="text-danger">
//                     {errors.password?.message}
//                   </Form.Text>
//                 </Form.Group>

//                 {/* Submit Button */}
//                 <Button variant="primary" type="submit" className="w-100">
//                   Log In
//                 </Button>
//                 <p className="text-center mt-3 text-white">
//                   Don't have an account?{" "}
//                   <a href="/signup" className="text-light">
//                     Sign up
//                   </a>
//                 </p>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

import react from "react";
import { useForm } from "react-hook-form";

export const LogInForm = () => {
  const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          id="username"
          {...register("username", {
            required: "This is required",
            maxLength: 20,
          })}
          placeholder="username"
        />
        <p>{errors.username?.message}</p>

        <label htmlFor="Password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          {...register("password", {
            required: "This is required",
            minLength: {
              value: 8,
              message: "Minimum Length 8 characters",
            },
          })}
          placeholder="password"
        />
        <p>{errors.password?.message}</p>

        <label htmlFor="Email">Email</label>
        <input type="text" id="email" name="email" {...register("email")} />

        <input type="submit" />
      </form>
    </div>
  );
};
