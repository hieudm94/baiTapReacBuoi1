import React, { Component } from 'react'

export default class CarouselComponent extends Component {
    render() {
        return (
            <div className='container'>
                <div className="carousel-top py-5">
                    <div className="">
                        <div className="bg-light text-center" >
                            <h1 className="fw-bold">
                                A warm welcome!
                            </h1>
                            <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                            <a href="#!" className='btn btn-primary btn-lg'>Call to action</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-bottom pt-5">
                    <div className="row">
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 ">
                                <div className="card-body text-center pr-5 pl-5 pb-5">
                                    <div class=" bg-primary text-white mb-4 mt-n5">
                                        <i class="fa-solid fa-ethernet"></i>
                                    </div>
                                    <h2 className="fw-bold"> Fresh new layout</h2>
                                    <p>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 ">
                                <div className="card-body text-center pr-5 pl-5 pb-5">
                                    <div class=" bg-primary text-white mb-4 mt-n5">
                                        <i class="fa-solid fa-cloud-arrow-down"></i>
                                    </div>
                                    <h2 className="fw-bold"> Free to download</h2>
                                    <p>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 ">
                                <div className="card-body text-center pr-5 pl-5 pb-5">
                                    <div class=" bg-primary text-white mb-4 mt-n5">
                                        <i class="fa-regular fa-credit-card"></i>
                                    </div>
                                    <h2 className="fw-bold"> Jumbotron hero header</h2>
                                    <p>The heroic part of this template is the jumbotron hero header!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 ">
                                <div className="card-body text-center pr-5 pl-5 pb-5">
                                    <div class=" bg-primary text-white mb-4 mt-n5">
                                        <i class="fa-brands fa-bootstrap"></i>
                                    </div>
                                    <h2 className="fw-bold"> Feature boxes</h2>
                                    <p>We've created some custom feature boxes using Bootstrap icons!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 ">
                                <div className="card-body text-center pr-5 pl-5 pb-5">
                                    <div class=" bg-primary text-white mb-4 mt-n5">
                                        <i class="fa-solid fa-code"></i>
                                    </div>
                                    <h2 className="fw-bold"> Simple clean code</h2>
                                    <p>We keep our dependencies up to date and squash bugs as they come!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xxl-4 mb-5">
                            <div className="card bg-light border-0 ">
                                <div className="card-body text-center pr-5 pl-5 pb-5">
                                    <div class=" bg-primary text-white mb-4 mt-n5">
                                        <i class="fa-regular fa-circle-check"></i>
                                    </div>
                                    <h2 className="fw-bold"> A name you trust</h2>
                                    <p>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}
