import React from "react";
import "../styles/about.css";
export default function About() {
  return (
    <>
      <div
        className="container-fluid about-background mt-5"
        style={{ height: "200px" }}
      ></div>
      {/* ExamElevate Description */}
      <div className="container courseation-content d-flex flex-column text-dark my-5">
        <h1 className="text-center mb-5 text-dark">ExamElevate</h1>
        <p className="text-center">
          ExamElevate - An interactive online course website that allows remote
          access to educational content and coursework.
        </p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-rocket-takeoff-fill mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
            <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
          </svg>
          <span className="fw-bold">Accessible Education:</span> We believe that
          education should be accessible to everyone, regardless of their
          location or background. Our platform offers a wide range of courses in
          various subjects, including technology, business, arts, language, and
          more. This makes learning easy and convenient, as learners can access
          our courses online from anywhere in the world.
        </p>

        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-rocket-takeoff-fill mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
            <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
          </svg>
          <span className="fw-bold">Experienced Educators:</span> Our courses
          are designed and taught by experienced educators who are passionate
          about sharing their knowledge and helping students achieve their
          goals. They have practical experience in their respective fields and
          are committed to delivering quality education.
        </p>

        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-rocket-takeoff-fill mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
            <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
          </svg>
          <span className="fw-bold">Interactive Learning:</span> Our platform
          features a variety of interactive learning tools, such as video
          lectures, quizzes, assignments, and discussions, that allow learners
          to engage with course material and interact with other students. This
          creates an engaging learning environment that keeps learners motivated
          and focused.
        </p>

        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-rocket-takeoff-fill mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
            <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
          </svg>
          <span className="fw-bold"> Self-Paced Learning: </span> Our courses
          are designed to accommodate different learning styles and schedules.
          Learners can study at their own pace and on their own schedule. This
          flexibility ensures that learners can balance their learning with
          other responsibilities, such as work and family.
        </p>

        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-rocket-takeoff-fill mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z" />
            <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z" />
          </svg>
          <span className="fw-bold">Comprehensive Course Material:</span> Our
          courses are designed to provide learners with comprehensive knowledge
          in their chosen field. Our course material is up-to-date and relevant
          to current industry trends, ensuring that learners acquire skills that
          are applicable in the real world.
        </p>
        <p className="text-center">
          Whether you want to upskill for your career, learn a new hobby, or
          broaden your knowledge, ExamElevate has a course for you. Join our
          community of learners today and start your learning journey towards
          your goals!
        </p>
      </div>
      {/* Team Details */}
              <div className="examElevate-team container d-flex flex-column justify-content-around align-items-center flex-wrap text-dark my-5">
        <br />
        <div className="container my-3">
          <h1 className="text-center text-decoration-underline text-dark">Our Team</h1>
        </div>
        <div className="container mt-5">
          <h3 className="text-center size1 text-dark">Development Team</h3>
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <div className="cards">
            <div className="image_container">
              <img
                className="w-100 h-auto"
                src="/images/user.jpg"
                alt="error"
              />
            </div>
            <div className="text-center fw-bold text-dark">Aman Gupta</div>
            <div className="text-center text-dark">
              Software Engineering Branch, 3rd Year
            </div>{" "}
          </div>
          <div className="cards">
            <div className="image_container">
              <img
                className="w-100 h-auto"
                src="/images/user.jpg"
                alt="error"
              />
            </div>
            <div className="text-center fw-bold text-dark">Abhishek Goyal</div>
            <div className="text-center text-dark">
              Software Engineering Branch, 3rd Year
            </div>{" "}
          </div>
        </div>
      </div>
      {/* Feedback Section */}
              <div className="examElevate-feedback d-flex flex-row align-items-center justify-content-center my-5">
        <div className="card mx-2 shadow-effect" style={{ width: "35rem" }}>
          <img src="/images/public-relations.png" className="card-img-top" alt="..." />
          <div class="card-body">
                            <p class="card-text">For media enquiry email us at <span style={{ color: "#67CEA2" }}>press@examElevate.com</span></p>
            <br />
          </div>
        </div>
        <div className="card mx-2 shadow-effect" style={{ width: "35rem" }}>
          <img src="/images/contact-us.png" className="card-img-top" alt="..." />
          <div class="card-body">
                            <p class="card-text">Shoot your questions to us at <span style={{ color: "#67CEA2" }}>help@examElevate.com</span></p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
}
