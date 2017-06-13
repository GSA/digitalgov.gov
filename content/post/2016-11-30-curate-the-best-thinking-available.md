---


date: 2016-11-30 3:00:06 -0400
title: 'Curate the Best Thinking Available'
summary: 'When I joined the code.gov project, I had just over a month to make an impact on the project. The most pressing work seemed to be defining a software metadata schema &mdash; a way for agencies to format the details of the software they&rsquo;ve built. In August of this year, the Federal Source Code Policy'
authors: [theresa-summa]
categories:
  - Code
tags:
  - 18F
  - code
  - open source
---

When I joined the [<span class="s2">code.gov</span>](https://code.gov/) project, I had just over a month to make an impact on the project. The most pressing work seemed to be defining a software metadata schema — a way for agencies to format the details of the software they’ve built.

In August of this year, the [<span class="s3">Federal Source Code Policy</span>](https://sourcecode.cio.gov/) was signed. It requires federal agencies to, among other things, inventory their custom software and make the inventory available for consumption and display by code.gov. This will allow agencies to reuse and collaborate on software. You can [<span class="s3">read more about the policy on code.gov</span>](https://code.gov/#/policy-guide/docs/overview/introduction).


{% include image/full-width.html img="https://www.WHATEVER/files/2017/03/600-x-500-Curate-the-best-thinking-available-By-Theresa-Summa-homepage-cfpb.jpg" alt="The code.gov homepage showing CFPB's open source resources." %}

The urgency to define the schema was driven by a 120-day deadline for agencies to use the schema to prepare their enterprise code inventories. We needed to define the schema with plenty of time for agencies to digest and adopt it.

Something else we were keenly aware of was that we were defining something agencies would be _required_ to comply with, adding more work to their already formidable workloads. The schema needed to be easy to implement and understand, or else we would jeopardize adoption of the policy.

When I joined the project, I was able to start with a draft schema from one of my colleagues. I’m new to the art of schema specification, and this led me to the decision I think made all the difference to the outcome of the schema definition — **I decided to bring in as many outside voices and ideas as I could**. I came to quickly view my role as the curator of the best thinking available.

I started by putting a call out to a handful of my 18F colleagues whom I knew had more experience in the area than I did and asked for feedback. Admittedly, at this point I was reluctant to put what we had out into the world as I felt it wasn’t polished enough, but with some gentle encouragement from others on the project, we published [<span class="s3">our first GitHub issue calling for feedback</span>](https://github.com/presidential-innovation-fellows/code-gov-web/issues/41).

I’m very glad we created that issue when we did. We received an amazing amount of high-quality feedback from the community, including both agency folks and the public in general. People brought up a great point, that we weren’t the first people to think about defining such a schema. After reviewing and prototyping a couple, we settled on an approach based off of this [<span class="s3">civic.json</span>](http://open.dc.gov/civic.json/), originally defined by BetaNYC and extended by Code for DC and DC government employees.

> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space"> </span></span><span class="s4">{</span>
> </p>
> 
> <p class="p4">
>   <span class="s5"><span class="Apple-converted-space">  </span></span><span class="s1">&#8220;agency&#8221;</span><span class="s4">:</span> <span class="s6">&#8220;DOABC&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">  </span></span><span class="s7">&#8220;organization&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;XYZ Department&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p4">
>   <span class="s5"><span class="Apple-converted-space">  </span></span><span class="s1">&#8220;projects&#8221;</span><span class="s4">:</span> <span class="s4">[</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">   </span></span><span class="s4">{</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;name&#8221;</span><span class="s4">:</span> <span class="s6">&#8220;mygov&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;description&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;A Platform for Connecting People and Government&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;license&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;https://path.to/license&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p4">
>   <span class="s5"><span class="Apple-converted-space">    </span></span><span class="s1">&#8220;openSourceProject&#8221;</span><span class="s4">:</span> <span class="s8">1</span><span class="s4">,</span>
> </p>
> 
> <p class="p4">
>   <span class="s5"><span class="Apple-converted-space">    </span></span><span class="s1">&#8220;governmentWideReuseProject&#8221;</span><span class="s4">:</span> <span class="s8"></span><span class="s4">,</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;tags&#8221;</span><span class="s4">:</span> <span class="s4">[</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">     </span></span><span class="s6">&#8220;platform&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">     </span></span><span class="s1">&#8220;government&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">     </span></span><span class="s1">&#8220;connecting&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">     </span></span><span class="s6">&#8220;people&#8221;</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s4">],</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;contact&#8221;</span><span class="s4">:</span> <span class="s4">{</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">     </span></span><span class="s7">&#8220;email&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;project@agency.gov&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">     </span></span><span class="s7">&#8220;name&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;Project Coordinator Name&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">     </span></span><span class="s7">&#8220;URL&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;https://twitter.com/projectname&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">     </span></span><span class="s7">&#8220;phone&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;2025551313&#8221;</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s4">},</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;status&#8221;</span><span class="s4">:</span> <span class="s6">&#8220;Alpha&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;vcs&#8221;</span><span class="s4">:</span> <span class="s6">&#8220;git&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;repository&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;https://github.com/presidential-innovation-fellows&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;homepage&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;https://agency.gov/project-homepage&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;downloadURL&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;https://agency.gov/project/dist.tar.gz&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p4">
>   <span class="s5"><span class="Apple-converted-space">    </span></span><span class="s1">&#8220;languages&#8221;</span><span class="s4">:</span> <span class="s4">[</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">     </span></span><span class="s6">&#8220;java&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">     </span></span><span class="s6">&#8220;python&#8221;</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s4">],</span>
> </p>
> 
> <p class="p4">
>   <span class="s5"><span class="Apple-converted-space">    </span></span><span class="s1">&#8220;partners&#8221;</span><span class="s4">:</span> <span class="s4">[</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">     </span></span><span class="s4">{</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">      </span></span><span class="s7">&#8220;name&#8221;</span><span class="s4">:</span> <span class="s6">&#8220;DOXYZ&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p5">
>   <span class="s5"><span class="Apple-converted-space">      </span></span><span class="s7">&#8220;email&#8221;</span><span class="s4">:</span> <span class="s1">&#8220;project@doxyz.gov&#8221;</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">     </span></span><span class="s4">}</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s4">],</span>
> </p>
> 
> <p class="p4">
>   <span class="s5"><span class="Apple-converted-space">    </span></span><span class="s1">&#8220;exemption&#8221;</span><span class="s4">:</span> <span class="s4">null,</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s7">&#8220;update&#8221;</span><span class="s4">:</span> <span class="s4">{</span>
> </p>
> 
> <p class="p4">
>   <span class="s5"><span class="Apple-converted-space">     </span></span><span class="s1">&#8220;lastCommit&#8221;</span><span class="s4">:</span> <span class="s6">&#8220;2016-04-13&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p4">
>   <span class="s5"><span class="Apple-converted-space">     </span></span><span class="s1">&#8220;metadataLastUpdated&#8221;</span><span class="s4">:</span> <span class="s6">&#8220;2016-04-13&#8221;</span><span class="s4">,</span>
> </p>
> 
> <p class="p4">
>   <span class="s5"><span class="Apple-converted-space">     </span></span><span class="s1">&#8220;lastModified&#8221;</span><span class="s4">:</span> <span class="s6">&#8220;2016-04-12&#8221;</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">    </span></span><span class="s4">}</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">   </span></span><span class="s4">}</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space">  </span></span><span class="s4">]</span>
> </p>
> 
> <p class="p3">
>   <span class="s1"><span class="Apple-converted-space"> </span></span><span class="s4">}</span>
> </p>

We made [<span class="s3">a call for a second round of feedback</span>](https://github.com/presidential-innovation-fellows/code-gov-web/issues/44) to verify that there were no major issues in the schema we were proposing. I recognized that a schema defined in a month largely by someone new to the policy would certainly not be perfect, and instead wanted to focus on a solid foundation that could be extended. I hope we accomplished that, and you can be the judge by checking out the [<span class="s3">documentation on code.gov</span>](https://code.gov/#/policy-guide/docs/compliance/inventory-code).
  
We were able to find success within the aggressive timeline because we relied on the wisdom of others with more domain knowledge and technical expertise to guide us. Instead of coming up with our own custom approach in isolation, we asked for input from our users and the public. This has helped our agency partners feel more engaged and has created a better end product. We were able to leverage something that already exists, and verify that it met our users’ needs, all within a month!

_This post was originally published on the [18F blog](https://18f.gsa.gov/blog/)._