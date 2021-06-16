---
title: Editorial For Cooking
date: "2021-06-15"
description: "Subset sum problems in dynamic programming."
tags: 
    - competitive
---
Cooking is a problem from AtCoder Beginner Contest 204, found <a href = "https://atcoder.jp/contests/abc204/tasks/abc204_d">here</a>. 

In this problem, we're given $n$ dishes numbered $1...i$ which each take $t_i$ minutes to cook. We have two ovens, which can each cook one dish, and we need to find the lowest overall time to cook everything. 

A pure naive solution to this problem would be to find every single possible permutation of an array, then finding the right split point to divide the array as to create two groups with the closest possible sum. This solution is extremely computationally inefficient, requiring $O(n\cdot n!)$ because of the linear iteration over all $n!$ permuations. 

How can we do better? 

As with most dynamic programming problems, some observations first need to be made to solve the problem. Firstly, we order the ovens. In our theoretical universe, the first oven will shut off with, or after the second one. Thus, the sum of the first oven must always be greater than the sum of all times for the dish, divided by two. This can be expressed as $\Sigma T_i/2$. However, we also want the amount of time taken for the first oven and the second oven to do their dishes to be similar. 

A statement that fulfills the two conditons above, is that we want the first oven to have a total time taken that is above $\Sigma T_i/2$, but it has to be as close to $\Sigma T_i/2$ as possible, since the amount of time taken by the second oven will always be $\Sigma T_i - first oven$. 

In other words, we want to find the minimum sum for a subset of $T_1 .. T_n$ so that the sum is greater than $\Sigma T_i/2$. This problem is fairly standard, being a variation of the subset sum problem. 

The code is first given below. 
```cpp
    #include <bits/stdc++.h>

    using namespace std;
    typedef long long ll;
    typedef long double ld;
    typedef pair<int, int> pii;
    typedef pair<ll, ll> pll;
    int main()
    {
        ll n; cin >> n;
        vector<ll> times (150);
        vector<int> dp (200000);
        ll sum = 0;
        for (int i = 0; i < n; i++){
            cin >> times[i];
            sum += times[i];
        }
        dp[0] = 1;
        for (int i = 0; i < n; i++){
            for (int j = sum; j >= times[i]; j--){
                dp[j] += dp[j - times[i]];
            }
        }
        for (ll i = (sum+1)/2; i<=sum; i++){
            if (dp[i]){
                cout << i << endl;
                exit(0);
            }
        }
    }
```
In the code, the variable $sum$ represents  the value of $\Sigma T_i$. We can see the way we solve the subset sum problem here too. We use a dynamic programming state where $dp[i]$ represents the amount of ways that we can create subsets of $i$ size. The base case is for $dp[0]$, because there are is obviously a single way to get a case size $0$. Beyond that, we consider each value of $T_i$. If there is a number  exactly $T_i$ above another, by adding $T_i$ to the lower number, we now have $dp[lower \space number]$ more ways to get to the higher number. We check this for all of the numbers spaced apart by $T_i$ until $\Sigma T_i$, as that is the upper bound of any subset sums. 

All of the values of $i$ in $dp[i]$ which have a value that isn't zero have a valid subset that sums up to $i$. Since we want the smallest subset sum above $\Sigma T_i/2$, we just loop upwards from there until we find a subset sum that fulfills our conditions. If we reach the value of $\Sigma T_i$ without coming across a single value, there is no solution. Otherwise, the answer is the first non-zero $i$ for which $dp[i]$ is not zero. 