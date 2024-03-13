const EmployeeListService = async (req, DataModel, SearchArray) => {
    const { DepartmentId } = req.body;
    return await DataModel.aggregate([
        {
            $match: { DepartmentId }
        },
        {
            $match: { $or: SearchArray }
        }
    ]);
};

module.exports = EmployeeListService;
