db.restaurant.count({ name: "McDonald's" });

db.restaurant.distinct("name");

db.order.aggregate(
  [
    { $match: {} },
    {
      $group: {
        _id: "5fff68a73af498b57ef4948e",
        total: {
          $sum: {
            $toDouble: "$price",
          },
        },
        count: {
          $sum: 1,
        },
      },
    },
  ],
  {}
);

db.order.aggregate([
  { $match: {} },
  {
    $group: {
      _id: "$customers.customer_id",
      total: {
        $sum: {
          $toDouble: "$price",
        },
      },
      count: {
        $sum: 1,
      },
    },
  },
  { $sort: { total: -1 } },
]);
