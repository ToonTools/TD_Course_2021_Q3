# Expressions in Harmony

Screenshots of the examples we did in Day 10's session

# shadow that scales as its parent moves higher
![](../images/shadow_scale.png)
``` javascript
min = 0.1
max = 1

shadowSize = 1/value("Square_posY")

if( shadowSize < min){
shadowSize = min
}


if( shadowSize >max){
shadowSize = max
}

```

# circle that rotates appropriate to distance traveled
![](../images/circle_traveling_1.png) --> ![](../images/circle_traveling_2.png)
```javascript
distance    = value("Circle_posX")
radius      = 4.5
angle       = -( distance*radius)
```
![](../images/distance_to_rotation.png)

# linear position of point on a circumfrence

![](../images/rotation_to_linear_1.png) --> ![](../images/rotation_to_linear_2.png)
```javascript
angle       = value("Circle2_angleZ")
radius      = 4.5
value       = radius * sin(angle)
```
![](../images/rotation_to_linear.png)
