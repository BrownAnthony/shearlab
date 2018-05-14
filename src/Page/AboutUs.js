import React from 'react';
import { Jumbotron } from 'reactstrap';


export function AboutUs() {
  return (
    <div>
      <div>
        <Jumbotron>
          <h1 className="display-3">ShearLab</h1>
          <p className="lead">
          Established to help working individuals keep their tools of trade at
          peak performance without breaking the bank.
          </p>
          <hr className="my-2" />
          <p>
          Founded in 2017, Shearlab was formed in humble origins with the need
          for affordable cost maintenance on shears and clipper blades.
          </p>
          <p>
          &quot;My wife finding her calling with animal grooming, realized that it
          was prohibitively expensive to have her shears and clipper blades
          sharpened. This revelation sparked this companies birth.
          &quot; - Anthony Brown, Company Founder
          </p>
          <p>
          After acquiring necessary equipment and training, the company
          started small with local grooming salons and barber shops gaining a
          trusted relationship with the community.
          </p>
          <p>Now we are hoping to have the opportunity to branch out
          and serve a greater area.
          </p>
        </Jumbotron>
      </div>
      <div>
        <Jumbotron>
          <h1 className="display-3">Method</h1>
          <p className="lead">Diamond Sharp</p>
          <hr className="my-2" />
          <p>
          ShearLab employs the use of diamond coated wheels to gain low heat,
          high yield results giving a sharp edge with a minimal material loss.
          All of this means you get the sharpest edge
          </p>
          <p>
          without compromising the life of your tools. All tools are cleaned
          and sanitized before sharpening to ensure no material will ever
          harbor harmful bacteria upon return. shears are
          </p>
          <p>
          polished post sharpening to further refine the edge and give a
          high-quality finish. As a final touch to shears and blades,
          high-quality oil is used to protect and streamline performance.
          </p>
        </Jumbotron>
      </div>
    </div>

  );
}
