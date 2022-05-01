---
title: 'Discussion on the viability of a modern Second Order Method in Non-Convex Optimization training a Deep Convolutional Neural Network'
date: 2021-01-01
permalink: /posts/2014/08/adahessian/
tags:
  - Machine Learning
---

**Optimization for ML, 100/100, 2021** <br> Second order algorithms are among the most powerful optimization algorithms with superior convergence properties as compared to first order methods such as SGD and Adam. However computing or approximating the curvature matrix can be very expensive both in per-iteration computation time and memory cost. In this study we analyze the convenience in using a state-of-the-art Second Order Method (AdaHessian) in Non-Convex Optimization training a Deep Convolutional Neural Network (ResNet18) on MNIST database comparing with traditional First Order Methods. Advantages and disadvantages of both the methods are discussed and a final hybrid method combining the advantages of both is proposed.


<img src='/images/ada.png'>

[Github](https://github.com/raphaelattias/adahessian){: .btn .btn--primary}
