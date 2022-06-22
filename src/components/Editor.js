import React from "react";
import styled from "styled-components";

export default function Editor() {
  return (
    <Container>
      <h2 className="editor_title">Designed for the future</h2>
      <div className="editor_content">
        <div className="editor_content__left">
          <h3 className="editor_content__left_title">
            Introducing an extensible editor
          </h3>
          <p className="editor_content__left_description">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embed such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
          <h3 className="editor_content__left_title">
            Robust content management
          </h3>
          <p className="editor_content__left_description">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </p>
        </div>
        <div className="editor_content__right">
          <img src="/images/editor-bg-desktop.svg" alt="editor illustration" />
          <img src="/images/editor-bg-mobile.svg" alt="editor illustration" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  margin: 72px 0 256px;
  position: relative;
  @media (max-width: 548px) {
    padding: 0;
    margin: 103px 0 266px;
  }
  .editor {
    &_title {
      padding: 82px 24px 0;
      text-align: center;
      font-weight: 300;
      font-size: 38px;
      line-height: 48px;
      color: var(--heading);
      @media (max-width: 548px) {
        padding: 0 24px 44px;
        font-weight: 600;
        font-size: 27px;
        line-height: 34px;
        letter-spacing: -0.02em;
      }
    }
    &_content {
      width: min(1325px, 100%);
      padding-left: 50px;
      margin-left: auto;
      @media (max-width: 548px) {
        padding: 0;
        display: flex;
        flex-direction: column-reverse;
      }
      &__left {
        width: min(537px, 100%);
        padding: 30px 0 0;
        @media (max-width: 548px) {
          padding: 7px 21px 0 29px;
        }
        &_title {
          font-weight: 600;
          font-size: 28px;
          line-height: 35px;
          letter-spacing: -0.008em;
          color: var(--heading);
          padding: 75px 0 0;
          @media (max-width: 548px) {
            line-height: 32px;
            text-align: center;
            padding: 43px 16px 0;
          }
        }
        &_description {
          padding: 25px 0 0;
          font-weight: 300;
          font-size: 16px;
          line-height: 175%;
          letter-spacing: 0.03em;
          color: var(--body-text);
          @media (max-width: 548px) {
            padding: 14px 0 0;
            text-align: center;
          }
        }
      }
      &__right {
        position: absolute;
        top: 0;
        right: 0;
        width: 45.139%;
        height: 100%;
        @media (max-width: 548px) {
          position: unset;
          width: 100%;
          height: auto;
        }
        & > img {
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center;
          &:first-child {
            @media (max-width: 548px) {
              display: none;
            }
          }
          &:nth-child(2) {
            @media (min-width: 549px) {
              display: none;
            }
          }
        }
      }
    }
  }
`;
