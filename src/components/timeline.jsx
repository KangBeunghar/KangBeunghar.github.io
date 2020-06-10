import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Maintenance at DataOn <span>April 2013-present</span></h2>
                        <p>Customer Satisfaction Responsibilities :</p>
                        <p>- Takes full responsibility for the dealing with relevant customer complaints, queries and requests for information from start to the end of the process.</p>
                        <p>- Provide solutions to customer problems with the assistance of development and/or implementation teams.</p>
                        <p>&nbsp;</p>
                        <p>Financial Management Responsibilities :</p>
                        <p>- Manages budgeted hours effectively in performing tasks.</p>
                        <p>- Encourages a deal for changes request that will financially benefit the company.</p>
                        <p>&nbsp;</p>
                        <p>Learning and Growth Responsibilities :</p>
                        <p>- Attends training to improve technical and soft skills.</p>
                        <p>&nbsp;</p>
                        <p>Internal Process Responsibilities :</p>
                        <p>- Aids the Software Maintenance Supervisor in ensuring that all relevant standards within the customer are met.</p>
                        <p>- Approach all matters in a non biased and professional manner.</p>
                        <p>- Ensure that both an appropriate and adequate investigation takes place in all cases. This includes the recording of all communication between the various parties and all information taken into consideration.</p>
                        <p>- Commission's customer website.</p>
                        <p>- Meet the objectives and performance measures agreed by the Software Maintenance Supervisor.</p>
                        <p>- Provide input to the development and implementation teams.</p>
                        <p>- Draft documentation as required and requested.</p>
                        <p>- Carry out relevant research as required and requested by Software maintenance Supervisor.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at SEAMEO BIOTROP<span>Jun 2011 - Aug 2011</span></h2>
                        <p>Create Executive Information Report</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Institut Pertanian Bogor (Bogor Agricultural University) <span>2008-2012</span></h2>
                        <p>Bachelor of Computer Science</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
