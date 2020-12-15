import React, { Component } from 'react'
import surfImage from "../../Assets/Images/surf.jpg"
import "./aboutMe.css"

export class aboutMe extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card mb-3">
                                <h1 id="about">About Me</h1>
                                <img id="homeImage" src={surfImage} className="card-img-top col"
                                    alt="Surfing Portfolio Pic"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Ian Nater</h5>
                                    <h6 id="bio"><b>Bio-</b></h6>
                                    <p className="card-text">Hello! My name is Ian Nater and I was born in San Francisco California.
                                    I
                                    moved to Austin when I was three years old and have been living here since. I have a
                                    younger
                                    sister who works at Facebook in Austin as well as a younger brother who is a senior at
                                    UT.
                                    Hook em. After High School I went to Southwestern University for a year before
                                    dropping
                                out to help start a company called <a href="https://briggo.com/" target="_blank" rel="noreferrer">Briggo
                                    Coffee.</a> Briggo is the worlds first fully robotic coffee barista hand made right
                                here
                                in Austin, Texas! I was fortunate enough to take the concept quite literally from a
                                garage
                                and scale it to multiple states and cities across the U.S. I even ended up in Dubai for
                                a
                                month installing one for the Crown Prince of Dubai. The business was recently sold and I
                                am
                                now taking time off while exploring what to do next. While at Briggo I was able to
                                interact
                                with our dev team daily and this sparked an interest in web dev for me. So, while looking for my next opportunity I decided to take a six month full stack web
                                development class. This portfolio is a collection of things I have built with the knowledge I have gained from the class. Hope you enjoy it!
                            </p>
                                    <div className="row">
                                        <div className="col-6">
                                            <h6 id="facts"><b>Fun Facts-</b></h6>
                                            <p className="card-text">
                                                <ul>
                                                    <li><small><b>Birthplace-</b> San Francisco</small></li>
                                                    <li><small><b>Favorite Hobbies-</b>Surfing, Mountain Biking, Water
                                                Skiing</small></li>
                                                    <li><small><b>Favorite Place in the World-</b> Santa Barbara, California</small>
                                                    </li>
                                                </ul>
                                            </p>
                                        </div>
                                        <div className="col-6">
                                            <h6 id="facts"><b>My Work- </b></h6>
                                            <p className="card-text">
                                                <ul>
                                                    <li><small><b>GitHub-</b><a href="https://github.com/iannater?tab=repositories"
                                                        target="blank">https://github.com/iannater?tab=repositories</a></small>
                                                    </li>
                                                    <li><small><b>Linkedin-</b><a
                                                        href="https://www.linkedin.com/in/ian-nater-40845486/"
                                                        target="blank">https://www.linkedin.com/in/ian-nater-40845486/</a></small>
                                                    </li>
                                                    <li><small><b>Resume-</b><a
                                                        href="./Assets/Resume/Ian_Nater_Resume2020.Final.pdf"> Ian Nater
                                                        2020
                                                    Resume</a></small></li>
                                                    <li><small><b>Email-</b> ian.nater@gmail.com</small></li>
                                                    <li><small><b>Phone Number-</b> 512-669-8072</small></li>
                                                </ul>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default aboutMe
