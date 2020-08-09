import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore Github Repositories</Title>

      <Form>
        <input placeholder="Enter the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/35277254?s=400&u=f04569a9e253ce89c39482eccb72f58cf2ff74df&v=4"
            alt="Fabio Pereira"
          />
          <div>
            <strong>fabioacp/terraform-docs</strong>
            <p>
              Generate documentation from Terraform modules in various output
              formats
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/35277254?s=400&u=f04569a9e253ce89c39482eccb72f58cf2ff74df&v=4"
            alt="Fabio Pereira"
          />
          <div>
            <strong>fabioacp/terraform-docs</strong>
            <p>
              Generate documentation from Terraform modules in various output
              formats
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/35277254?s=400&u=f04569a9e253ce89c39482eccb72f58cf2ff74df&v=4"
            alt="Fabio Pereira"
          />
          <div>
            <strong>fabioacp/terraform-docs</strong>
            <p>
              Generate documentation from Terraform modules in various output
              formats
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
