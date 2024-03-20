const EmployeeListService = async (req, DataModel, searchKeyword) => {
    const { DepartmentId } = req.params;
    const regexPattern = new RegExp(searchKeyword, 'i'); // Construct regex pattern
    const query = {
        DepartmentId,
        $or: [
            { FirstName: regexPattern },
            { LastName: regexPattern },
            { Gender: regexPattern },
            { Address: regexPattern },
            { Phone: regexPattern },
            { Email: regexPattern }
        ]
    };
    return await DataModel.find(query);
};

module.exports = EmployeeListService;





// MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();